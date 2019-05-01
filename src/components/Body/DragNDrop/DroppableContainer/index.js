import React from "react";
import PropTypes from "prop-types";
import { Droppable } from "react-beautiful-dnd";
import { FaThumbtack } from "react-icons/fa";
import TaskContainer from "../TaskContainer";
import Title from "../Title";
import NoData from "../NoData";
import DraggableItem from "../DraggableItem";
import Container from "../Container";

const DroppableContainer = ({ droppableId, title, data }) => (
  <Container>
    <Droppable droppableId={droppableId}>
      {({ innerRef, droppableProps, placeholder }, { isDraggingOver }) => (
        <TaskContainer
          ref={innerRef}
          isDraggingOver={isDraggingOver}
          {...droppableProps}
        >
          <Title>{title}</Title>
          {data && data.length > 0 ? (
            data.map(({ id, description }, index) => (
              <DraggableItem
                key={id}
                id={id}
                description={description}
                index={index}
              />
            ))
          ) : (
            <NoData>
              <FaThumbtack />
              <br />
              No Tasks
            </NoData>
          )}
          {placeholder}
        </TaskContainer>
      )}
    </Droppable>
  </Container>
);

DroppableContainer.propTypes = {
  droppableId: PropTypes.string.isRequired,
  title: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      description: PropTypes.string
    })
  ).isRequired
};

export default DroppableContainer;
