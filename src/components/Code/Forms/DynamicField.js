export default `import React, { useCallback, useState } from "react";
import random from "lodash/random";
import { MdAdd, MdClose } from "react-icons/md";

// this function creates a random string of variable characters and variable length
const stringGenerator = (str, tlen) => {
  const arr = [...str];
  const max = arr.length - 1;
  let string = "";
  for (let i = 0; i < tlen; i += 1) {
    const int = random(max);
    string += arr[int];
  }
  return string;
};

// this creates a random string with [Aa-Zz,0-9,$/.] that is 8 characters long
// NOTE: You can use an alternative approach such as the "uuid" npm package if
// you don't want to handle this logic.
const createRandomString = () =>
  stringGenerator(
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$/.",
    8
  );

// create a custom useDynamicFieldHandler hook that returns values and returns 3
// functions: addField, deleteField, and handleChange.
const useDynamicFieldHandler = initialState => {
  const [values, updateFields] = useState(initialState);

  // the addField function will not receive any parameters. in the updateFields callback
  // it'll spread out any previous fields, before adding a new field object with a
  // random name (name needs to be unique to avoid naming collisons when updating the field
  // via its "name" property), its position (not required), and an empty value. lastly,
  // it'll add 1 to the fieldsCount.
  const addField = useCallback(() => {
    updateFields(prevState => ({
      fields: [
        ...prevState.fields,
        {
          name: \`Field_\${createRandomString()}\`,
          position: prevState.fieldsCount + 1,
          value: ""
        }
      ],
      fieldsCount: prevState.fieldsCount + 1
    }));
  }, []);

  // the deleteField function will receive a "name" parameter from the field's delete
  // button onClick handler. then in the updateField's callback, it'll filter the fields
  // array comparing each "field.name" to the "name"; if found, it'll remove the object
  // from the array, then, it'll map over this filtered array and update each field's
  // position. lastly, the fieldsCount will be deducted by 1.
  const deleteField = useCallback(name => {
    updateFields(prevState => ({
      fields: prevState.fields
        .filter(field => field.name !== name)
        .map((field, key) => ({ ...field, position: key + 1 })),
      fieldsCount: prevState.fieldsCount - 1
    }));
  }, []);

  // the handleChange function will first deconstruct e.target.name and
  // e.target.value, then in the updateFields callback function, it'll spread out any
  // previous state, then map over the fields array comparing the e.target.name with the
  // field.name. if the two are a match, it'll update the value; otherwise, it'll just
  // return the field.
  const handleChange = useCallback(({ target: { name, value } }) => {
    updateFields(prevState => ({
      ...prevState,
      fields: prevState.fields.map((field, key) =>
        field.name === name ? { ...field, value } : field
      )
    }));
  }, []);

  return {
    addField,
    deleteField,
    values,
    handleChange
  };
};


// utilize the custom useDynamicFieldHandler. in addition, include a
// handleSubmit function that handles the form when it has been submitted.
const DynamicFieldForm = () => {
  const {
    addField,
    deleteField,
    handleChange,
    values
  } = useDynamicFieldHandler({
    fieldsCount: 1,
    fields: [
      {
        name: \`Field_\${createRandomString()}\`,
        position: 1,
        value: ""
      }
    ]
  });

  const handleSubmit = e => {
    e.preventDefault();
    alert(JSON.stringify(values, null, 4));
  };

  return (
    <form onSubmit={handleSubmit}>
      {values.fields.map(({ name, value }) => (
        <div key={name}>
          <input
            type="text"
            name={name}
            placeholder="Type something..."
            onChange={handleChange}
            value={value}
          />
            {values.fieldsCount > 1 && (
              <button onClick={() => deleteField(name)}>
                <MdClose />
              </button>
            )}
        </div>
      ))}
      <button type="button" onClick={addField}><MdAdd/> Add Field</button>
      <button type="submit">Submit</button>
    </form>
  );
};

export default DynamicFieldForm;
`;
