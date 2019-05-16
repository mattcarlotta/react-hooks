import React from "react";
import PropTypes from "prop-types";
import {
  Example,
  FlexContainer,
  Input,
  Label,
  ResetButton,
  ShowCode,
  ShowCodeButton,
  SubTitle
} from "../../../Body";
import { AnchorLink } from "../../../Navigation";
import { useEventHandler, useToggle } from "../../../Hooks";

const InputExample = ({ innerRef }) => {
  const { value, handleChange, resetValue } = useEventHandler("");
  const [showCode, toggleShowCode] = useToggle(false);

  return (
    <>
      <SubTitle ref={innerRef}>
        <AnchorLink to="/examples/forms/elements#input" />
        Input
      </SubTitle>
      <FlexContainer>
        <Example>
          <Label>Input:</Label>
          <Input
            type="text"
            placeholder="Type something..."
            onChange={handleChange}
            value={value}
          />
          <ResetButton handleClick={resetValue} />
        </Example>
        <ShowCodeButton showCode={showCode} toggleShowCode={toggleShowCode} />
      </FlexContainer>
      <ShowCode showCode={showCode} fileName="Forms/Input.js" />
    </>
  );
};

InputExample.propTypes = {
  innerRef: PropTypes.func.isRequired
};

export default InputExample;
