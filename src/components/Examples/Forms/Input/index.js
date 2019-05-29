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
import { AnchorLink } from "../../../Navigation";
import { useEventHandler, useToggle } from "../../../Hooks";

const InputExample = () => {
  const { value, handleChange, resetValue } = useEventHandler("");
  const [showCode, toggleShowCode] = useToggle(false);

  return (
    <>
      <SubTitle id="input">
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
      <ShowCode
        link="https://codesandbox.io/s/react-hooks-guide-input-urf41?fontsize=14"
        showCode={showCode}
        fileName="Forms/Input.js"
      />
    </>
  );
};

export default InputExample;
