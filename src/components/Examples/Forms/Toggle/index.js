import React from "react";
import {
  Checkbox,
  Divider,
  Example,
  FlexContainer,
  Label,
  ShowCode,
  ShowCodeButton,
  SubTitle,
  Toggle
} from "../../../Body";
import { AnchorLink } from "../../../Navigation";
import { useToggle } from "../../../Hooks";

const ToggleExample = () => {
  const [toggleState, toggleSwitch] = useToggle(false);
  const [checkboxState, setCheckboxState] = useToggle(false);
  const [showCode, toggleShowCode] = useToggle(false);

  return (
    <>
      <SubTitle id="toggle">
        <AnchorLink to="/examples/forms/elements#toggle" />
        Toggle
      </SubTitle>
      <FlexContainer>
        <Example>
          <Label>Switch:</Label>
          <Toggle value={toggleState} handleClick={toggleSwitch} />
          <Divider />
          <Label>Checkbox:</Label>
          <Checkbox
            inputStyle={{ height: "20px", width: "20px", marginTop: "10px" }}
            value={checkboxState}
            handleChange={setCheckboxState}
          />
        </Example>
        <ShowCodeButton showCode={showCode} toggleShowCode={toggleShowCode} />
      </FlexContainer>
      <ShowCode showCode={showCode} fileName="Forms/Toggle.js" />
    </>
  );
};

export default ToggleExample;
