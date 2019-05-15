import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { MdCode } from "react-icons/md";
import { Paragraph, Title } from "../../../components/Body";
import { Link, NavBlock } from "../../../components/Navigation";
import {
  DynamicFieldExample,
  LoginExample,
  RegistrationExample,
  UploadFileExample,
  ValidateFieldExample
} from "../../../components/Examples";
import { useScroll } from "../../../components/Hooks";

const Forms = ({ match: { url }, location: { hash } }) => {
  const currentHash = hash.substr(1);
  const [loginRef] = useScroll(currentHash);
  const [registrationRef] = useScroll(currentHash);
  const [dynamicfieldRef] = useScroll(currentHash);
  const [validationRef] = useScroll(currentHash);
  const [uploadRef] = useScroll(currentHash);

  return (
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
      <LoginExample innerRef={loginRef} />
      <RegistrationExample innerRef={registrationRef} />
      <DynamicFieldExample innerRef={dynamicfieldRef} />
      <ValidateFieldExample innerRef={validationRef} />
      <UploadFileExample innerRef={uploadRef} />
    </>
  );
};

Forms.propTypes = {
  hash: PropTypes.string,
  url: PropTypes.string
};

export default Forms;
