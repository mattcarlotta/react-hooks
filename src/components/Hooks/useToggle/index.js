import { useState, useCallback } from "react";
import PropTypes from "prop-types";

const useToggle = initialValue => {
  const [value, setValue] = useState(initialValue);
  const handleChange = useCallback(() => setValue(value => !value));
  return [value, handleChange];
};

useToggle.propTypes = {
  initialValue: PropTypes.bool.isRequird
};

export default useToggle;
