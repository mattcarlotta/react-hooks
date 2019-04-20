import React from "react";
import {
  Example,
  FlexContainer,
  Input,
  Label,
  ResetButton,
  ShowCode,
  ShowCodeButton,
  SubTitle
} from "../../Body";
import { useEventHandler, useToggle } from "../../Hooks";

const InputExample = () => {
  const { value, handleChange, resetValue } = useEventHandler("");
  const [showCode, toggleShowCode] = useToggle(false);

  return (
    <>
      <SubTitle>Input</SubTitle>
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
      <ShowCode showCode={showCode} fileName="Input.js" />
    </>
  );
};

export default InputExample;
