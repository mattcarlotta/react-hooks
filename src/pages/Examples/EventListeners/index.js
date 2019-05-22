import React from "react";
import Helmet from "react-helmet";
import { MdCode } from "react-icons/md";
import {
  KeyListenerExample,
  MousedownExample
} from "../../../components/Examples";
import { Paragraph, Title } from "../../../components/Body";

const FormElements = () => (
  <>
    <Helmet title="Event Listeners" />
    <Title>Event Listeners</Title>
    <Paragraph>
      Below are some examples of event listeners. To view the source code, click
      the <MdCode style={{ verticalAlign: "middle" }} /> button.
    </Paragraph>
    <MousedownExample />
    <KeyListenerExample />
  </>
);

export default FormElements;
