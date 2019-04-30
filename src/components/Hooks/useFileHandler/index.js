import { useState, useCallback } from "react";
import PropTypes from "prop-types";

const useFileHandler = initialState => {
  const [values, setValues] = useState(initialState);
  const handleChange = useCallback(({ target: { name, files } }) => {
    const newImageFile = {
      file: files[0],
      name: files[0].name,
      preview: URL.createObjectURL(files[0]),
      size: files[0].size
    };

    setValues({ [name]: [newImageFile] });
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

useFileHandler.propTypes = {
  initialState: PropTypes.objectOf(PropTypes.string)
};

export default useFileHandler;
