import React, { useState } from "react";
import { FaToggleOff, FaToggleOn } from "react-icons/fa";
import {
  Button,
  Example,
  FlexContainer,
  Label,
  ShowCode,
  ShowCodeButton,
  SubTitle,
  useToggle
} from "../../Body";

const ToggleExample = () => {
  const [toggleState, setToggleState] = useState(true);
  const [showCode, toggleShowCode] = useToggle(false);

  const toggleSwitch = () => {
    setToggleState(!toggleState);
  };

  return (
    <>
      <SubTitle>Toggle</SubTitle>
      <FlexContainer>
        <Example>
          <Label>Toggle:</Label>
          <Button style={{ margin: 20 }} onClick={toggleSwitch}>
            {toggleState ? <FaToggleOff /> : <FaToggleOn />}
          </Button>
        </Example>
        <ShowCodeButton showCode={showCode} toggleShowCode={toggleShowCode} />
      </FlexContainer>
      <ShowCode showCode={showCode} fileName="Toggle.js" />
    </>
  );
};

export default ToggleExample;
