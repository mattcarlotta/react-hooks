import { useState, useCallback } from "react";
import PropTypes from "prop-types";

export const validateFields = fields => {
  const validatedFields = fields.map(({ fieldName, value }) => {
    let error = "";
    if (!value) {
      error = "Required";
    } else {
      if (fieldName === "name" && value.length <= 1)
        error = "Name must be longer than 1 character!";

      if (
        fieldName === "email" &&
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
      )
        error = "Invalid email. (john.smith@example.com)";

      if (fieldName === "phone") {
        if (!/^[0-9-]+$/.test(value))
          error = "Invalid phone number. Do not use special characters.";
        else if (value.length !== 14)
          error = "Invalid phone format. (1-555-555-5555)";
      }
    }

    return { fieldName, value, error };
  });

  let errors = null;
  validatedFields.forEach(({ error }) => {
    if (error) errors += 1;
  });

  return { validatedFields, errors };
};

const useFieldValidator = initialState => {
  const [values, setValues] = useState(initialState);

  const handleChange = useCallback(({ target: { name, value } }) => {
    setValues(prevState => ({
      ...prevState,
      fields: prevState.fields.map(field =>
        field.fieldName === name ? { ...field, value } : field
      )
    }));
  }, []);

  const resetValues = useCallback(() => setValues(initialState), [
    initialState
  ]);

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      const { validatedFields, errors } = validateFields(values.fields);
      setValues({ fields: validatedFields });
      if (!errors) {
        setTimeout(() => {
          alert(JSON.stringify(values.fields, null, 4));
          resetValues();
        }, 300);
      }
    },
    [resetValues, values]
  );

  return {
    values,
    handleChange,
    handleSubmit,
    resetValues
  };
};

useFieldValidator.propTypes = {
  initialState: PropTypes.shape({
    fields: PropTypes.arrayOf(
      PropTypes.shape({
        fieldName: PropTypes.string.isRequired,
        value: PropTypes.string,
        error: PropTypes.string
      })
    ),
    errors: PropTypes.number.isRequired
  })
};

export default useFieldValidator;
