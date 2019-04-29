export default `import React, { useCallback, useState } from "react";
import { FaUserPlus, FaToggleOff, FaToggleOn } from "react-icons/fa";

// create a custom useFormHandler hook that returns initial values
// and a handleChange function to update the values.
// the handleChange function will first deconstruct e.target.name and
// e.target.value, then in the setValues callback function, it'll 
// spread out any previous state before updating the changed [name] 
// property (ex. name="username") with an updated "value".
const useFormHandler = initialState => {
  const [values, setValues] = useState(initialState);

  const handleChange = useCallback(
    ({ target: { name, value } }) =>
      setValues(prevState => ({ ...prevState, [name]: value })),
    []
  );

  return {
    handleChange,
    values
  };
};

// create a custom toggle hook that returns an initial value and 
// a callback function to update the value.
const useToggle = initialValue => {
  const [value, setValue] = useState(initialValue);
  const handleChange = useCallback(() => setValue(value => !value));
  return [value, handleChange];
};

const inputFields = [
  { type: "email", name: "email", placeholder: "Email" },
  { type: "password", name: "password", placeholder: "Password" },
  { name: "firstName", placeholder: "First Name" },
  { name: "lastName", placeholder: "Last Name" },
  { name: "address", placeholder: "Address" },
  { name: "city", placeholder: "City" },
  { name: "state", placeholder: "State/Providence" },
  { name: "zip", placeholder: "Zip/Postal Code" }
];

const selectOptions = [
  "Canada", 
  "United States", 
];

const addressTypes = [
  "Residential",
  "Business"
];

// utilize the custom useFormHandler and useToggle hooks within 
// a function. in addition, include a handleSubmit function that
// handles the form when it has been submitted.
const RegistrationForm = () => {
  const { values, handleChange } = useFormHandler({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    addressType: ""
  });
  
  const [toggleState, toggleSwitch] = useToggle(false);

  const handleSubmit = e => {
    e.preventDefault();
    const formProps = { ...values, sameAsBillingAddr: toggleState };
    alert(JSON.stringify(formProps, null, 4));
  };

  return (
    <form onSubmit={handleSubmit}>
            {inputFields.map(({ name, type, placeholder }) => (
        <input
                      key={name}
                      type={type || "text"}
                      name={name}
                      placeholder={placeholder}
                      onChange={handleChange}
                      value={values[name]}
                  />
      ))}
            <select
                name="country"
                placeholder="Select a country..."
                onChange={handleChange}
                value={values.country}
            >
                {selectOptions.map(value => (
          <option key={value} value={value}>
                        {value}
                    </option>
        ))}
            </select>
            {addressTypes.map(type => (
        <span key={type}>
                        <input 
                              type="radio" 
                              id={type}
                              name="addressType"
                              value={type}
                              onChange={handleChange}
                              checked={type === values.addressType}
                        />
                        <label htmlFor={type}/>{type}</label>
                  </span>
      ))}
            <button type="button" onClick={setToggleState}>
                {!toggleState ? <FaToggleOff /> : <FaToggleOn />}
            </button>
            <button type="submit">
               <FaUserPlus/> Register
            </button>
        </form>
  );
};

export default RegistrationForm;
`;
