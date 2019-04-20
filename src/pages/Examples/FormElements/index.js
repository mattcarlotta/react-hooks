import React from "react";
import Helmet from "react-helmet";
import { MdCode } from "react-icons/md";
import {
  InputExample,
  SelectExample,
  ToggleExample
} from "../../../components/Examples";
import { Paragraph, Title } from "../../../components/Body";

const FormElements = () => (
  <>
    <Helmet title="Form Elements" />
    <Title>Form Elements</Title>
    <Paragraph>
      Below are some examples of individual form elements. To view the source
      code, click the <MdCode style={{ verticalAlign: "middle" }} /> button.
    </Paragraph>
    <ToggleExample />
    <InputExample />
    <SelectExample />
  </>
);

export default FormElements;
