import React from "react";
import {
  BlockContainer,
  Column,
  Label,
  ResetButton,
  Row,
  Select,
  SelectContainer,
  ShowCode,
  ShowCodeButton,
  SubTitle
} from "../../../Body";
import { AnchorLink } from "../../../Navigation";
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
      <SubTitle id="localstoragepersistence">
        <AnchorLink to="/examples/misc#localstoragepersistence" />
        Local Storage Persistence
      </SubTitle>
      <BlockContainer>
        <Row>
          <Column width="75%">
            <BlockContainer style={styles.column1}>
              <Label>Shirt:</Label>
              <SelectContainer>
                <Select
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
                />
              </SelectContainer>
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
      <ShowCode
        link="https://codesandbox.io/s/react-hooks-guide-local-storage-persistence-ekl76?fontsize=14"
        showCode={showCode}
        fileName="Misc/LocalStorage.js"
      />
    </>
  );
};

export default LocalStorageExample;
