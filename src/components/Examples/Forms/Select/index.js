import React from "react";
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
import { useToggle, useDynamicEventHandler } from "../../../Hooks";

const SelectExample = () => {
  const { values, handleChange, resetValue } = useDynamicEventHandler({
    components: ""
  });
  const [showCode, toggleShowCode] = useToggle(false);

  return (
    <>
      <SubTitle>Select</SubTitle>
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

export default SelectExample;
