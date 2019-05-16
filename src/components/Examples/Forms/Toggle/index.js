import React from "react";
import PropTypes from "prop-types";
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

const ToggleExample = ({ innerRef }) => {
  const [toggleState, toggleSwitch] = useToggle(false);
  const [checkboxState, setCheckboxState] = useToggle(false);
  const [showCode, toggleShowCode] = useToggle(false);

  return (
    <>
      <SubTitle ref={innerRef}>
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

ToggleExample.propTypes = {
  innerRef: PropTypes.func.isRequired
};

export default ToggleExample;
