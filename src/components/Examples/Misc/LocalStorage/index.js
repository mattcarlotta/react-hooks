import React from "react";
import PropTypes from "prop-types";
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

const LocalStorageExample = ({ innerRef }) => {
  const { handleChange, resetValue, storedValue } = useLocalEventStorage(
    "size",
    {
      size: ""
    }
  );

  const [showCode, toggleShowCode] = useToggle(false);

  return (
    <>
      <SubTitle ref={innerRef}>
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
      <ShowCode showCode={showCode} fileName="Misc/LocalStorage.js" />
    </>
  );
};

LocalStorageExample.propTypes = {
  innerRef: PropTypes.func.isRequired
};

export default LocalStorageExample;
