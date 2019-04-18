import React, { useState, useCallback } from "react";
import { FaTrash } from "react-icons/fa";
import {
  Button,
  Example,
  FlexContainer,
  Label,
  Select,
  ShowCode,
  ShowCodeButton,
  SubTitle,
  ToolTip
} from "../../Body";
import { useToggle } from "../../Hooks";

const useDynamicEventHandler = initialState => {
  const [values, setValues] = useState(initialState);
  const handleChange = useCallback(
    ({ target: { name, value } }) => setValues({ [name]: value }),
    []
  );
  const resetValue = useCallback(() => setValues(initialState), []);

  return {
    values,
    handleChange,
    resetValue
  };
};

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
          <Select
            label="Components"
            name="components"
            value={values.components}
            placeholder="(default)"
            handleChange={handleChange}
            selectOptions={[
              "React.Component",
              "React.PureComponent",
              "React.StatelessComponent",
              "Pure Functions"
            ]}
          />
          <ToolTip placement="top" overlay={<span>Reset</span>}>
            <Button onClick={resetValue}>
              <FaTrash />
            </Button>
          </ToolTip>
        </Example>
        <ShowCodeButton showCode={showCode} toggleShowCode={toggleShowCode} />
      </FlexContainer>
      <ShowCode showCode={showCode} fileName="Input.js" />
    </>
  );
};

export default SelectExample;
