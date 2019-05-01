import React from "react";
import PropTypes from "prop-types";
import { Draggable } from "react-beautiful-dnd";
import DraggableProp from "./DraggableProp";
import Row from "../../Row";
import Column from "../../Column";

const DraggableItem = ({ item, index }) => (
  <Draggable
    key={item.id}
    draggableId={JSON.stringify({
      nodeId: item.id,
      type: "DragItem"
    })}
    index={index}
  >
    {({ draggableProps, dragHandleProps, innerRef }, { isDragging }) => (
      <Row ref={innerRef} {...draggableProps} {...dragHandleProps}>
        <Column>
          <DraggableProp isDragging={isDragging}>{item.name}</DraggableProp>
        </Column>
      </Row>
    )}
  </Draggable>
);

DraggableItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string
  })
};

export default DraggableItem;
