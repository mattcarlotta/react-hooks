import { useState, useCallback } from "react";
import PropTypes from "prop-types";

const useDragDropHandler = initialState => {
  const [values, setValues] = useState(initialState);
  const handleChange = useCallback(({ destination, source, draggableId }) => {
    if (destination && source) {
      setValues(prevState => {
        const sourceIndex = source.index;
        const destinationIndex = destination.index;
        const sourceContainer = prevState.columns[source.droppableId];
        const destinationContainer = prevState.columns[destination.droppableId];
        const sourceIds = Array.from(sourceContainer.taskIds);
        const destinationIds = Array.from(destinationContainer.taskIds);
        const isSameContainer = sourceContainer === destinationContainer;

        sourceIds.splice(sourceIndex, 1);

        if (isSameContainer) {
          sourceIds.splice(destinationIndex, 0, draggableId);
        } else {
          destinationIds.splice(destinationIndex, 0, draggableId);
        }

        const newSourceContainer = {
          ...sourceContainer,
          taskIds: sourceIds
        };

        const newDestinationContainer = {
          ...destinationContainer,
          taskIds: destinationIds
        };

        const updatedColumns = isSameContainer
          ? { [newSourceContainer.id]: newSourceContainer }
          : {
              [newSourceContainer.id]: newSourceContainer,
              [newDestinationContainer.id]: newDestinationContainer
            };

        return {
          ...prevState,
          columns: {
            ...prevState.columns,
            ...updatedColumns
          }
        };
      });
    }
  }, []);
  const resetValues = useCallback(() => setValues(initialState), [
    initialState
  ]);

  return {
    values,
    handleChange,
    resetValues
  };
};

useDragDropHandler.propTypes = {
  initialState: PropTypes.shape({
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
  }).isRequired
};

export default useDragDropHandler;
