import React from "react";
import PropTypes from "prop-types";
import { DragDropContext } from "react-beautiful-dnd";
import Container from "./Container";
import DroppableContainer from "./DroppableContainer";
import { Column, Row } from "../";

const DraggableContainer = ({ tasks, columns, handleChange }) => (
  <DragDropContext onDragEnd={handleChange}>
    <Container>
      <Row style={{ margin: "0 auto" }}>
        {Object.values(columns).map(({ id, title, taskIds }) => (
          <Column width={`${100 / columns.length}%`} key={id}>
            <DroppableContainer
              droppableId={id}
              title={title}
              data={taskIds.map(id => tasks[id])}
            />
          </Column>
        ))}
      </Row>
    </Container>
  </DragDropContext>
);

DraggableContainer.propTypes = {
  tasks: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired
    })
  ),
  columns: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      taskIds: PropTypes.arrayOf(PropTypes.string)
    })
  )
};

export default DraggableContainer;
