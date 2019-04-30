import React from "react";
import {
  BlockContainer,
  Column,
  DragNDrop,
  ResetButton,
  Row,
  ShowCode,
  ShowCodeButton,
  SubTitle
} from "../../../Body";
import { useDragDropHandler, useToggle } from "../../../Hooks";

const styles = {
  containerStyle: {
    padding: "20px 20px 0 10px",
    background: "#fff",
    margin: "10px",
    borderRadius: "4px",
    border: "1px dashed #03a9f3"
  },
  column: {
    padding: "10px 0"
  },
  reset: {
    marginLeft: "10px",
    marginBottom: "10px",
    width: "100%"
  },
  showCodeButton: {
    float: "right"
  }
};

const data = {
  container1: [
    { id: 1, name: "item 1" },
    { id: 2, name: "item 2" },
    { id: 3, name: "item 3" },
    { id: 4, name: "item 4" },
    { id: 5, name: "item 5" },
    { id: 6, name: "item 6" }
  ],

  container2: [
    { id: 101, name: "other 1" },
    { id: 102, name: "other 2" },
    { id: 103, name: "other 3" },
    { id: 104, name: "other 4" }
  ]
};

const UploadFileExample = () => {
  const { values, handleChange, resetValues } = useDragDropHandler({
    ...data
  });

  const [showCode, toggleShowCode] = useToggle(false);

  return (
    <>
      <SubTitle>Drag and Drop</SubTitle>
      <BlockContainer>
        <Row>
          <Column width="75%">
            <BlockContainer style={styles.containerStyle}>
              <DragNDrop data={values} handleChange={handleChange} />
            </BlockContainer>
            <ResetButton
              handleClick={resetValues}
              style={styles.reset}
              text="Reset"
            />
          </Column>
          <Column width="25%" align="flex-end" style={styles.column}>
            <ShowCodeButton
              style={styles.showCodeButton}
              showCode={showCode}
              toggleShowCode={toggleShowCode}
            />
          </Column>
        </Row>
      </BlockContainer>
      <ShowCode showCode={showCode} fileName="Forms/UploadFile.js" />
    </>
  );
};

export default UploadFileExample;
