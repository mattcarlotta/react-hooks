import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { MdCode } from "react-icons/md";
import {
  KeyListenerExample,
  MousedownExample
} from "../../../components/Examples";
import { Paragraph, Title } from "../../../components/Body";
import { useScroll } from "../../../components/Hooks";

const FormElements = ({ location: { hash } }) => {
  const currentHash = hash.substr(1);
  const [mouseRef] = useScroll(currentHash);
  const [keyRef] = useScroll(currentHash);
  return (
    <>
      <Helmet title="Event Listeners" />
      <Title>Event Listeners</Title>
      <Paragraph>
        Below are some examples of event listeners. To view the source code,
        click the <MdCode style={{ verticalAlign: "middle" }} /> button.
      </Paragraph>
      <MousedownExample innerRef={mouseRef} />
      <KeyListenerExample innerRef={keyRef} />
    </>
  );
};

FormElements.propTypes = {
  hash: PropTypes.string
};

export default FormElements;
