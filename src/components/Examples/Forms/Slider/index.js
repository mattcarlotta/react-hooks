import React from "react";
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

const SliderExample = () => {
  const { values, handleChange } = useDynamicEventHandler({
    temperature: "50"
  });
  const [showCode, toggleShowCode] = useToggle(false);

  return (
    <>
      <SubTitle id="slider">
        <AnchorLink to="/examples/forms/elements#slider" />
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
      <ShowCode
        link="https://codesandbox.io/s/react-hooks-guide-slider-qi7xk?fontsize=14"
        showCode={showCode}
        fileName="Forms/Slider.js"
      />
    </>
  );
};

export default SliderExample;
