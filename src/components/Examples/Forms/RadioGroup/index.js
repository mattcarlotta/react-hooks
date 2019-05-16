import React from "react";
import PropTypes from "prop-types";
import {
  Example,
  FlexContainer,
  Radio,
  Label,
  ShowCode,
  ShowCodeButton,
  SubTitle
} from "../../../Body";
import { AnchorLink } from "../../../Navigation";
import { useToggle, useDynamicEventHandler } from "../../../Hooks";

const options = ["blue", "red", "violet", "pink", "yellow"];

const RadioGroupExample = ({ innerRef }) => {
  const { values, handleChange } = useDynamicEventHandler({
    favoriteColor: ""
  });
  const [showCode, toggleShowCode] = useToggle(false);

  return (
    <>
      <SubTitle ref={innerRef}>
        <AnchorLink to="/examples/forms/elements#radiogroup" />
        Radio Group
      </SubTitle>
      <FlexContainer>
        <Example>
          <Label style={{ marginRight: "5px" }}>Favorite:</Label>
          {options.map(color => (
            <Radio
              key={color}
              name="favoriteColor"
              value={color}
              handleChange={handleChange}
              checked={color === values.favoriteColor}
            />
          ))}
        </Example>
        <ShowCodeButton showCode={showCode} toggleShowCode={toggleShowCode} />
      </FlexContainer>
      <ShowCode showCode={showCode} fileName="Forms/RadioGroup.js" />
    </>
  );
};

RadioGroupExample.propTypes = {
  innerRef: PropTypes.func.isRequired
};

export default RadioGroupExample;
