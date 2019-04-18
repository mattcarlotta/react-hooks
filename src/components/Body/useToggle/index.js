import { useState, useCallback } from "react";
import PropTypes from "prop-types";

const useToggle = initialValue => {
  const [value, setValue] = useState(initialValue);
  const toggler = useCallback(() => setValue(value => !value));
  return [value, toggler];
};

useToggle.propTypes = {
  initialValue: PropTypes.bool.isRequird
};

export default useToggle;
