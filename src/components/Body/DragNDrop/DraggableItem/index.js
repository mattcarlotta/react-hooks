import React from "react";
import PropTypes from "prop-types";
import { Draggable } from "react-beautiful-dnd";
import DraggableProp from "./DraggableProp";
import Row from "../../Row";
import Column from "../../Column";

const DraggableItem = ({ item, index }) => (
  <Draggable key={item.id} draggableId={item.id} index={index}>
    {({ draggableProps, dragHandleProps, innerRef }, { isDragging }) => (
      <Row ref={innerRef} {...draggableProps} {...dragHandleProps}>
        <Column>
          <DraggableProp isDragging={isDragging}>
            {item.description}
          </DraggableProp>
        </Column>
      </Row>
    )}
  </Draggable>
);

DraggableItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    description: PropTypes.string
  })
};

export default DraggableItem;