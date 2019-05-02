import React from "react";
import {
  BlockContainer,
  Button,
  Column,
  DragNDrop,
  Row,
  ShowCode,
  ShowCodeButton,
  SubTitle
} from "../../../Body";
import { useDragDropHandler, useToggle } from "../../../Hooks";

const styles = {
  containerStyle: {
    padding: "20px 20px 0 10px",
    background: "#4c9aff",
    margin: "10px",
    borderRadius: "4px"
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

const initialData = {
  tasks: {
    "task-1": {
      id: "task-1",
      description: "Create an upload microservice."
    },
    "task-2": {
      id: "task-2",
      description: "Add top-level notifications."
    },
    "task-3": {
      id: "task-3",
      description: "Integrate Redux for authentication."
    },
    "task-4": {
      id: "task-4",
      description: "Prioritize email support by ticketing."
    },
    "task-5": {
      id: "task-5",
      description: "Ability to update account details."
    },
    "task-6": {
      id: "task-6",
      description: "Create a messager service."
    },
    "task-7": {
      id: "task-7",
      description: "Invite friends to events."
    }
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "To Do",
      taskIds: ["task-1", "task-2", "task-3", "task-4"]
    },
    "column-2": {
      id: "column-2",
      title: "Completed",
      taskIds: ["task-5", "task-6", "task-7"]
    }
  }
};

const DragNDropExample = () => {
  const { values, handleChange, resetValues } = useDragDropHandler(initialData);

  const [showCode, toggleShowCode] = useToggle(false);

  return (
    <>
      <SubTitle>Drag and Drop</SubTitle>
      <BlockContainer>
        <Row>
          <Column width="75%">
            <BlockContainer style={styles.containerStyle}>
              <DragNDrop
                columns={values.columns}
                tasks={values.tasks}
                handleChange={handleChange}
              />
            </BlockContainer>
            <Button onClick={resetValues} style={styles.reset}>
              Reset
            </Button>
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

export default DragNDropExample;
