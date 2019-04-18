import React, { useState } from "react";
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
import { useToggle } from "../../Hooks";

const InputExample = () => {
  const [inputValue, setInputValue] = useState("");
  const [showCode, toggleShowCode] = useToggle(false);

  return (
    <>
      <SubTitle>Input</SubTitle>
      <FlexContainer>
        <Example>
          <Label>Label:</Label>
          <Input
            placeholder="Type something..."
            onChange={({ target: { value } }) => setInputValue(value)}
            value={inputValue}
          />
          <ToolTip placement="top" overlay={<span>Reset</span>}>
            <Button onClick={() => setInputValue("")}>
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
