import { useState } from "react";
import PropTypes from "prop-types";

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (e) {
      return initialValue;
    }
  });

  const setValue = value => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.log(e);
    }
  };

  return [storedValue, setValue];
};

useLocalStorage.propTypes = {
  key: PropTypes.string.isRequired,
  initialValue: PropTypes.any.isRequired
};

export default useLocalStorage;
