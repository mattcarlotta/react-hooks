import { useState, useCallback } from "react";
import PropTypes from "prop-types";

const useEventHandler = initialValue => {
  const [value, setValue] = useState(initialValue);
  const handleChange = useCallback(
    ({ target: { value } }) => setValue(value),
    []
  );
  const resetValue = useCallback(() => setValue(""), []);

  return {
    value,
    handleChange,
    resetValue
  };
};

useEventHandler.propTypes = {
  initialValue: PropTypes.string
};

export default useEventHandler;
