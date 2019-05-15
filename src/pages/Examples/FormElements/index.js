import React from "react";
import PropTypes from "prop-types";
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
import { useScroll } from "../../../components/Hooks";

const FormElements = ({ location: { hash } }) => {
  const currentHash = hash.substr(1);
  const [toggleRef] = useScroll(currentHash);
  const [radioRef] = useScroll(currentHash);
  const [selectRef] = useScroll(currentHash);
  const [sliderRef] = useScroll(currentHash);
  const [inputRef] = useScroll(currentHash);

  return (
    <>
      <Helmet title="Form Elements" />
      <Title>Form Elements</Title>
      <Paragraph>
        Below are some examples of common individual form elements. To view the
        source code, click the <MdCode style={{ verticalAlign: "middle" }} />{" "}
        button.
      </Paragraph>
      <ToggleExample innerRef={toggleRef} />
      <RadioGroupExample innerRef={radioRef} />
      <SelectExample innerRef={selectRef} />
      <SliderExample innerRef={sliderRef} />
      <InputExample innerRef={inputRef} />
    </>
  );
};

FormElements.propTypes = {
  hash: PropTypes.string
};

export default FormElements;
