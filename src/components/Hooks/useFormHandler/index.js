import { useState, useCallback } from "react";
import PropTypes from "prop-types";

const useFormHandler = initialState => {
  const [values, setValues] = useState(initialState);
  const handleChange = useCallback(
    ({ target: { name, value } }) =>
      setValues(prevState => ({ ...prevState, [name]: value })),
    []
  );
  const resetValue = useCallback(() => setValues(initialState), [initialState]);

  return {
    handleChange,
    resetValue,
    values
  };
};

useFormHandler.propTypes = {
  initialState: PropTypes.any
};

export default useFormHandler;
