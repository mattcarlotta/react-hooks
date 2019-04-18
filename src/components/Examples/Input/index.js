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
  ToolTip,
  useToggle
} from "../../Body";

const InputExample = () => {
  const [inputValue, setInputValue] = useState("");
  const [showCode, toggleShowCode] = useToggle(false);

  const handleChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  const resetInputValue = () => {
    setInputValue("");
  };

  return (
    <>
      <SubTitle>Input</SubTitle>
      <FlexContainer>
        <Example>
          <Label>Label:</Label>
          <Input
            placeholder="Type something..."
            onChange={handleChange}
            value={inputValue}
          />
          <ToolTip placement="top" overlay={<span>Reset</span>}>
            <Button onClick={resetInputValue}>
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
