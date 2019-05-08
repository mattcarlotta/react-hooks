export default `import React, { useCallback, useState } from "react";
import { FaRegCalendarCheck, FaTrash } from "react-icons/fa";

// create a validateFields function that accepts "fields" and traverses
// each of the fields' "value"s to see if they're present and/or they meet
// any additional requirements. if there are any errors, they'll get returned
// and stored to the field.
export const validateFields = fields => {
  const validatedFields = fields.map(({ fieldName, value }) => {
    let error = "";
    if (!value) {
      error = "Required";
    } else {
      if (fieldName === "name" && value.length < 1)
        error = "Name must be longer than 1 character!";

      if (
        fieldName === "email" &&
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,4}$/i.test(value)
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

// create a custom "useFieldValidator" hook that returns an initial value 
// and 3 callback functions: to update, to reset, and to validate the values.
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

      // utilize the "validateFields" function above
      const { validatedFields, errors } = validateFields(values.fields);

      // update "fields" state with "validatedFields"
      setValues({ fields: validatedFields });

      // check if there are any "errors" before submission
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

const fields = [
  { fieldName: "name", value: "", error: "" },
  { fieldName: "email", value: "", error: "" },
  { fieldName: "phone", value: "", error: "" }
];

// utilize the custom "useFieldValidator" hook within a function.
const ValidatedFields = () => {
  const { values, handleChange, handleSubmit, resetValues } = useValidateFields(
    {
      fields,
      errors: 0
    }
  );

  return (
    <form onSubmit={handleSubmit}>
      {values.fields.map(({fieldName, error, value }) => (
        <div key={fieldName}>
          <label htmlFor={fieldName}>{fieldName}</label>
          <input
            type="text"
            name={fieldName}
            placeholder="Type something..."
            onChange={handleChange}
            value={value}
          />
          {error && <p>{error}</p>}
        </div>
       ))}
      <button type="reset" onClick={resetValue}>
        <FaTrash />
      </button>
      <button type="submit">
         <FaRegCalendarCheck />
      </button>
    </form>
  );
};

export default ValidatedFields;
`;
