import React, { useState } from "react";
import {
  Example,
  FlexContainer,
  Label,
  ShowCode,
  ShowCodeButton,
  SubTitle,
  Toggle
} from "../../Body";
import { useToggle } from "../../Hooks";

const ToggleExample = () => {
  const [toggleState, setToggleState] = useState(false);
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
          <Toggle toggleState={toggleState} toggleSwitch={toggleSwitch} />
        </Example>
        <ShowCodeButton showCode={showCode} toggleShowCode={toggleShowCode} />
      </FlexContainer>
      <ShowCode showCode={showCode} fileName="Toggle.js" />
    </>
  );
};

export default ToggleExample;
