import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { MdCode } from "react-icons/md";
import { Paragraph, Title } from "../../../components/Body";
import { Link, NavBlock } from "../../../components/Navigation";
import { LoginExample } from "../../../components/Examples";

const Forms = ({ match: { url } }) => (
  <>
    <Helmet title="Forms" />
    <Title>Forms</Title>
    <Paragraph>
      Below are examples of forms. To view the source code, click the{" "}
      <MdCode style={{ verticalAlign: "middle" }} /> button.
    </Paragraph>
    <NavBlock>
      <Link to={`${url}/elements`}>Form Elements</Link>
    </NavBlock>
    <LoginExample />
  </>
);

Forms.propTypes = {
  url: PropTypes.string
};

export default Forms;
