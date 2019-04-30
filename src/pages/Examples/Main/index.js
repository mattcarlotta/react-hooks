import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { Paragraph, Title } from "../../../components/Body";
import { Link, NavBlock } from "../../../components/Navigation";

const Main = ({ match: { url } }) => (
  <>
    <Helmet title="Examples" />
    <Title>Hook Examples</Title>
    <Paragraph>Below are some examples of using React Hooks.</Paragraph>
    <NavBlock>
      <Link to={`${url}/events`}>Event Listeners</Link>
    </NavBlock>
    <NavBlock>
      <Link to={`${url}/forms`}>Forms</Link>
    </NavBlock>
    <NavBlock>
      <Link to={`${url}/misc`}>Miscelleanous</Link>
    </NavBlock>
  </>
);

Main.propTypes = {
  url: PropTypes.string
};

export default Main;
