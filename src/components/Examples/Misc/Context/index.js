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
} from "../../../Body";
import { useProvider, useToggle } from "../../../Hooks";

const ContextExample = () => {
  const { value, handleChange, resetValue } = useProvider();
  const [showCode, toggleShowCode] = useToggle(false);

  return (
    <>
      <SubTitle>Context Persistence</SubTitle>
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
      <ShowCode showCode={showCode} fileName="Misc/Context.js" />
    </>
  );
};

export default ContextExample;
