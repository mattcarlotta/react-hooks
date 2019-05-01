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

// const initialData = {
//   tasks: {
//     'task-1': { id: 'task-1', description: "Create an upload microservice."},
//     'task-2': { id: 'task-2', description: "Add a top-level notification component."},
//     'task-3': { id: 'task-3', description: "Integrate Redux for authentication."},
//     'task-4': { id: 'task-4', description: "Prioritize email support by ticketing."},
//   },
//   columns: {
//     'column-1': {
//       id: 'column-1',
//       title: 'To Do',
//       taskIds: ['task-1', 'task-2', 'task-3', 'task-4']
//     },
//     'column-2': {
//       id: 'column-2',
//       title: 'Done',
//       taskIds: []
//     }
//   },
//   columnOrder: ['column-1', 'column-2']
// }

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
      <ShowCode showCode={showCode} fileName="Misc/DragNDrop.js" />
    </>
  );
};

export default UploadFileExample;
