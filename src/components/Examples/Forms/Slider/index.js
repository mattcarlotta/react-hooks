import React from "react";
import PropTypes from "prop-types";
import {
  Example,
  FlexContainer,
  Label,
  ShowCode,
  ShowCodeButton,
  Slider,
  SubTitle
} from "../../../Body";
import { AnchorLink } from "../../../Navigation";
import { useToggle, useDynamicEventHandler } from "../../../Hooks";

const SliderExample = ({ innerRef }) => {
  const { values, handleChange } = useDynamicEventHandler({
    temperature: "50"
  });
  const [showCode, toggleShowCode] = useToggle(false);

  return (
    <>
      <SubTitle ref={innerRef}>
        <AnchorLink to="/examples/forms/elements/#slider" />
        Slider
      </SubTitle>
      <FlexContainer>
        <Example>
          <Label style={{ marginRight: "5px" }}>Slider:</Label>
          <Slider
            min="0"
            max="100"
            unit="°F"
            handleChange={handleChange}
            name="temperature"
            value={values.temperature}
          />
        </Example>
        <ShowCodeButton showCode={showCode} toggleShowCode={toggleShowCode} />
      </FlexContainer>
      <ShowCode showCode={showCode} fileName="Forms/Slider.js" />
    </>
  );
};

SliderExample.propTypes = {
  innerRef: PropTypes.func.isRequired
};

export default SliderExample;
