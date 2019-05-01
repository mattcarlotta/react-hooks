import React from "react";
import PropTypes from "prop-types";
import { Droppable } from "react-beautiful-dnd";
import { FaDatabase } from "react-icons/fa";
import Border from "../Border";
import Title from "../Title";
import NoData from "../NoData";
import DraggableItem from "../DraggableItem";
import Container from "../Container";

const DroppableContainer = ({ droppableId, title, data }) => (
  <Container>
    <Droppable droppableId={droppableId}>
      {({ innerRef, droppableProps, placeholder }, { isDraggingOver }) => (
        <Border
          ref={innerRef}
          isDraggingOver={isDraggingOver}
          {...droppableProps}
        >
          <Title>{title}</Title>
          {data && data.length > 0 ? (
            data.map((item, key) => (
              <DraggableItem key={item.id} item={item} index={key} />
            ))
          ) : (
            <NoData>
              <FaDatabase />
              <br />
              No Items
            </NoData>
          )}
          {placeholder}
        </Border>
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
      name: PropTypes.string
    })
  ).isRequired
};

export default DroppableContainer;
