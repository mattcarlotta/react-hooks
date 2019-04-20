import React from "react";
import PropTypes from "prop-types";
import { Paragraph, Title } from "../../../components/Body";
import { Link, NavBlock } from "../../../components/Navigation";

const Main = ({ match: { url } }) => (
  <>
    <Title>Hook Examples</Title>
    <Paragraph>Below are some examples of using React Hooks.</Paragraph>
    <NavBlock>
      <Link to={`${url}/form`}>Form</Link>
    </NavBlock>
    <NavBlock>
      <Link to={`${url}/form/elements`}>Form Elements</Link>
    </NavBlock>
  </>
);

Main.propTypes = {
  url: PropTypes.string
};

export default Main;
