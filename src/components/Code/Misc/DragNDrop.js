export default `import React, { Fragment, useState, useCallback } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { FaThumbtack } from "react-icons/fa";

// initial task data
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
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "To Do",
      taskIds: ["task-1"]
    },
    "column-2": {
      id: "column-2",
      title: "Completed",
      taskIds: ["task-2"]
    }
  }
};

// create a custom useDragDropHandler hook that returns values, handles
// dragging and dropping, and resetting back to initial state.
const useDragDropHandler = initialState => {
  const [values, setValues] = useState(initialState);
  const handleChange = useCallback(({ destination, source, draggableId }) => {
    if (destination && source) {
      setValues(prevState => {
        const sourceIndex = source.index; // source taskId index
        const destinationIndex = destination.index; // destination taskId index
        const sourceContainer = prevState.columns[source.droppableId]; // source container object
        const destinationContainer = prevState.columns[destination.droppableId]; // desination container object
        const sourceIds = Array.from(sourceContainer.taskIds); // source container "taskIds" array
        const destinationIds = Array.from(destinationContainer.taskIds); // destination container "taskIds" array
        const isSameContainer = sourceContainer === destinationContainer; // check if source and destination container are the same

        // remove a taskId from the source "taskIds" array via the sourceIndex
        sourceIds.splice(sourceIndex, 1); 

        // add a taskId (draggableId) to the source or destination "taskIds" array 
        if (isSameContainer) {
          sourceIds.splice(destinationIndex, 0, draggableId);
        } else {
          destinationIds.splice(destinationIndex, 0, draggableId);
        }

        // update the source container with changed sourceIds
        const newSourceContainer = {
          ...sourceContainer,
          taskIds: sourceIds
        };

        // update the destination container with changed destinationIds
        const newDestinationContainer = {
          ...destinationContainer,
          taskIds: destinationIds
        };

        // if the source and destination container are the same
        // update the source container only, otherwise, update both
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

// create a reusable "DragDrop" component that takes in
// tasks, columns and a handleChange function
const DragDrop = ({ tasks, columns, handleChange }) => (
  <DragDropContext onDragEnd={handleChange}>
        {Object.values(columns).map(({ id, title, taskIds }) => (
      <Droppable key={id} droppableId={droppableId}>
                  {({ innerRef, droppableProps, placeholder }) => (
          <div
                            ref={innerRef}
                            {...droppableProps}
                        >
                            <h5>{title}</h5>
                            {taskIds && taskIds.length > 0 
                ? taskIds.map((task, index) => (
                    <Draggable key={task.id} draggableId={task.id} index={index}>
                                                {({ draggableProps, dragHandleProps, innerRef }) => (
                         <div ref={innerRef} {...draggableProps} {...dragHandleProps}>
                                                            <div>
                                                              {task.description}
                                                            </div>
                                                      </div>
                      )}
                                          </Draggable>
                  ))
                : <div>
                                            <FaThumbtack />
                                            <br />
                                            No Tasks
                                      </div>
              )}
                            {placeholder}
                      </div>
        )}
            </Droppable>
    ))}
    </DragDropContext>
);

// utilize the custom useDragDropHandler hook and the "DragDrop" reuseable component
// within a function.
const DragDropExample = () => {
  const { values, handleChange, resetValues } = useDragDropHandler(initialData);

  return (
    <Fragment>      
              <DragDrop
                    columns={values.columns}
                    tasks={values.tasks}
                    handleChange={handleChange}
              />
              <button onClick={resetValues}>
                    Reset
              </button>
        </Fragment>
  );
};

export default DragDropExample;
`;
