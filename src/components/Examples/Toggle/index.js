import React from "react";
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
  const [toggleState, toggleSwitch] = useToggle(false);
  const [showCode, toggleShowCode] = useToggle(false);

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
