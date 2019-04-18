import React from "react";
import { FaTrash } from "react-icons/fa";
import {
  Button,
  Example,
  FlexContainer,
  Input,
  Label,
  ShowCode,
  ShowCodeButton,
  SubTitle,
  ToolTip
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
          <Label>Label:</Label>
          <Input
            placeholder="Type something..."
            onChange={handleChange}
            value={value}
          />
          <ToolTip placement="top" overlay={<span>Reset</span>}>
            <Button onClick={resetValue}>
              <FaTrash />
            </Button>
          </ToolTip>
        </Example>
        <ShowCodeButton showCode={showCode} toggleShowCode={toggleShowCode} />
      </FlexContainer>
      <ShowCode showCode={showCode} fileName="Input.js" />
    </>
  );
};

export default InputExample;
