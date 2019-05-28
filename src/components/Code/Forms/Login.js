export default `import React, { useCallback, useState } from "react";

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
  const handleChange = useCallback(() => setValue(value => !value), []);
  return [value, handleChange];
};

// utilize the custom useFormHandler and useToggle hooks within
// a function. in addition, include a handleSubmit function that
// handles the form when it has been submitted.
const LoginForm = () => {
  const { values, handleChange } = useFormHandler({
    username: "",
    password: ""
  });

  const [rememberUser, toggleRememberUser] = useToggle(false);

  const handleSubmit = e => {
    e.preventDefault();
    const formProps = { ...values, rememberUser };
    alert(JSON.stringify(formProps, null, 4));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        placeholder="Username"
        onChange={handleChange}
        value={values.username}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
        value={values.password}
      />
      <label htmlFor="rememberUser">Remember Me</label>
      <input
        name="rememberUser"
        checked={rememberUser}
        onChange={toggleRememberUser}
        type="checkbox"
        value={rememberUser}
      />
      <a href="#">Forgot Password</a>
      <button type="submit">Log in</button>
    </form>
  );
};

export default LoginForm;
`;
