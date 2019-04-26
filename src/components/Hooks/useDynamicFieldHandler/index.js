import { useCallback, useState } from "react";
import PropTypes from "prop-types";
import { createRandomString } from "../../../utils/helpers";

const useDynamicFieldHandler = initialState => {
  const [values, updateFields] = useState(initialState);

  const addField = useCallback(() => {
    updateFields(prevState => ({
      fields: [
        ...prevState.fields,
        {
          name: `Field_${createRandomString()}`,
          position: prevState.fieldsCount + 1,
          value: ""
        }
      ],
      fieldsCount: prevState.fieldsCount + 1
    }));
  }, []);

  const deleteField = useCallback(name => {
    updateFields(prevState => ({
      fields: prevState.fields
        .filter(field => field.name !== name)
        .map((field, key) => ({ ...field, position: key + 1 })),
      fieldsCount: prevState.fieldsCount - 1
    }));
  }, []);

  const handleChange = useCallback(({ target: { name, value } }) => {
    updateFields(prevState => ({
      ...prevState,
      fields: prevState.fields.map((field, key) => {
        const position = key + 1;
        return field.name === name
          ? { ...field, position, value }
          : { ...field, position };
      })
    }));
  }, []);

  return {
    addField,
    deleteField,
    values,
    handleChange
  };
};

useDynamicFieldHandler.propTypes = {
  initialState: PropTypes.arrayOf(
    PropTypes.shape({
      fields: PropTypes.shape({
        name: PropTypes.string.isRequired,
        position: PropTypes.number.isRequired,
        value: PropTypes.string.isRequired
      }),
      fieldsCount: PropTypes.number.isRequired
    })
  ).isRequired
};

export default useDynamicFieldHandler;
