import React from "react";
import Helmet from "react-helmet";
import { MdCode } from "react-icons/md";
import {
  InputExample,
  RadioGroupExample,
  SelectExample,
  SliderExample,
  ToggleExample
} from "../../../components/Examples";
import { Paragraph, Title } from "../../../components/Body";

const FormElements = () => (
  <>
    <Helmet title="Form Elements" />
    <Title>Form Elements</Title>
    <Paragraph>
      Below are some examples of common individual form elements. To view the
      source code, click the <MdCode style={{ verticalAlign: "middle" }} />{" "}
      button.
    </Paragraph>
    <ToggleExample />
    <RadioGroupExample />
    <SelectExample />
    <SliderExample />
    <InputExample />
  </>
);

export default FormElements;
