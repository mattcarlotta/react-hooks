import React from "react";
import PropTypes from "prop-types";
import {
  Example,
  FlexContainer,
  Label,
  ResetButton,
  Select,
  SelectContainer,
  ShowCode,
  ShowCodeButton,
  SubTitle
} from "../../../Body";
import { AnchorLink } from "../../../Navigation";
import { useToggle, useDynamicEventHandler } from "../../../Hooks";

const SelectExample = ({ innerRef }) => {
  const { values, handleChange, resetValue } = useDynamicEventHandler({
    components: ""
  });
  const [showCode, toggleShowCode] = useToggle(false);

  return (
    <>
      <SubTitle ref={innerRef}>
        <AnchorLink to="/examples/forms/elements#select" />
        Select
      </SubTitle>
      <FlexContainer>
        <Example>
          <Label>Select:</Label>
          <SelectContainer>
            <Select
              name="components"
              value={values.components}
              placeholder="Select an option..."
              handleChange={handleChange}
              selectOptions={[
                "React.Component",
                "React.PureComponent",
                "React.StatelessComponent",
                "Pure Functions"
              ]}
            />
          </SelectContainer>
          <ResetButton handleClick={resetValue} />
        </Example>
        <ShowCodeButton showCode={showCode} toggleShowCode={toggleShowCode} />
      </FlexContainer>
      <ShowCode showCode={showCode} fileName="Forms/Select.js" />
    </>
  );
};

SelectExample.propTypes = {
  innerRef: PropTypes.func.isRequired
};

export default SelectExample;
