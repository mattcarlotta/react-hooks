import { useState, useCallback } from "react";
import PropTypes from "prop-types";

const useDynamicEventHandler = initialState => {
  const [values, setValues] = useState(initialState);
  const handleChange = useCallback(
    ({ name, value }) => setValues({ [name]: value }),
    []
  );
  const resetValue = useCallback(() => setValues(initialState), []);

  return {
    values,
    handleChange,
    resetValue
  };
};

useDynamicEventHandler.propTypes = {
  initialState: PropTypes.objectOf(PropTypes.string)
};

export default useDynamicEventHandler;
