import { useState, useCallback } from "react";
import PropTypes from "prop-types";

const useLocalEventStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (e) {
      return initialValue;
    }
  });

  const handleChange = useCallback(
    ({ target: { name, value } }) => {
      try {
        window.localStorage.setItem(key, JSON.stringify({ [name]: value }));
        setStoredValue({ [name]: value });
      } catch (e) {
        console.log(e);
      }
    },
    [key]
  );

  const resetValue = useCallback(() => {
    try {
      window.localStorage.removeItem(key);
      setStoredValue(initialValue);
    } catch (e) {
      setStoredValue(initialValue);
    }
  }, [initialValue, key]);

  return {
    handleChange,
    resetValue,
    storedValue
  };
};

useLocalEventStorage.propTypes = {
  key: PropTypes.string.isRequired,
  initialValue: PropTypes.any.isRequired
};

export default useLocalEventStorage;
