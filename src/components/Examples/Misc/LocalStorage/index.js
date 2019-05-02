import React from "react";
import {
  BlockContainer,
  Column,
  Label,
  ResetButton,
  Row,
  Select,
  ShowCode,
  ShowCodeButton,
  SubTitle
} from "../../../Body";
import { useLocalEventStorage, useToggle } from "../../../Hooks";

const styles = {
  column1: {
    padding: "10px 5px"
  },
  column2: {
    padding: "10px 0"
  },
  showCodeButton: {
    float: "right"
  }
};

const LocalStorageExample = () => {
  const { handleChange, resetValue, storedValue } = useLocalEventStorage(
    "size",
    {
      size: ""
    }
  );

  const [showCode, toggleShowCode] = useToggle(false);

  return (
    <>
      <SubTitle>Local Storage Persistence</SubTitle>
      <BlockContainer>
        <Row>
          <Column width="75%">
            <BlockContainer style={styles.column1}>
              <Label>Shirt Size:</Label>
              <Select
                label="Size"
                name="size"
                value={storedValue.size}
                placeholder="Select a size..."
                handleChange={handleChange}
                selectOptions={[
                  "Extra Small",
                  "Small",
                  "Medium",
                  "Large",
                  "Extra Large"
                ]}
                width="300px"
              />
              <ResetButton style={styles.reset} handleClick={resetValue} />
            </BlockContainer>
          </Column>
          <Column width="25%" align="flex-end" style={styles.column2}>
            <ShowCodeButton
              style={styles.showCodeButton}
              showCode={showCode}
              toggleShowCode={toggleShowCode}
            />
          </Column>
        </Row>
      </BlockContainer>
      <ShowCode showCode={showCode} fileName="Misc/LocalStorage.js" />
    </>
  );
};

export default LocalStorageExample;
