import cloneDeep from "lodash/cloneDeep";
import { useState, useCallback } from "react";
import PropTypes from "prop-types";

const useDragDropHandler = initialState => {
  const [values, setValues] = useState(initialState);
  const handleChange = useCallback(({ destination, source }) => {
    if (destination && source) {
      setValues(prevState => {
        const newData = cloneDeep(prevState);

        newData[destination.droppableId].splice(
          destination.index,
          0,
          ...newData[source.droppableId].splice(source.index, 1)
        );

        return {
          ...newData
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
  initialState: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.string
    })
  ).isRequired
};

export default useDragDropHandler;
