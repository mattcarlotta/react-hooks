import React from "react";
import { FaUserPlus } from "react-icons/fa";
import {
  BlockContainer,
  Button,
  Column,
  Form,
  Label,
  Input,
  Row,
  Select,
  ShowCode,
  ShowCodeButton,
  SubTitle,
  Toggle
} from "../../../Body";
import { useFormHandler, useToggle } from "../../../Hooks";

const styles = {
  containerStyle: {
    display: "block",
    marginBottom: "24px",
    width: "100%"
  },
  blockContainer: {
    padding: "0px",
    marginBottom: "20px"
  },
  button: {
    width: "100%"
  },
  column2: {
    padding: "20px 0"
  },
  icon: {
    verticalAlign: "middle",
    marginRight: "5px"
  },
  label: {
    fontSize: "16px",
    position: "relative",
    top: "-10px",
    marginLeft: "5px"
  },
  showCodeButton: {
    float: "right"
  }
};

const inputFields = [
  {
    type: "email",
    name: "email",
    placeholder: "Email"
  },
  {
    type: "password",
    name: "password",
    placeholder: "Password"
  },
  {
    name: "firstName",
    placeholder: "First Name"
  },
  {
    name: "lastName",
    placeholder: "Last Name"
  },
  {
    name: "address",
    placeholder: "Address"
  },
  {
    name: "city",
    placeholder: "City"
  },
  {
    name: "state",
    placeholder: "State/Providence"
  },
  {
    name: "zip",
    placeholder: "Zip/Postal Code"
  }
];

const RegistrationExample = () => {
  const { values, handleChange } = useFormHandler({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: ""
  });
  const [toggleState, toggleSwitch] = useToggle(false);
  const [showCode, toggleShowCode] = useToggle(false);

  const handleSubmit = e => {
    e.preventDefault();
    const formProps = { ...values, sameAsBillingAddr: toggleState };
    alert(JSON.stringify(formProps, null, 4));
  };

  return (
    <>
      <SubTitle>Registration Form</SubTitle>
      <BlockContainer>
        <Row>
          <Column width="75%">
            <Form onSubmit={handleSubmit}>
              {inputFields.map(({ name, type, placeholder }) => (
                <Input
                  key={name}
                  type={type || "text"}
                  name={name}
                  containerStyle={styles.containerStyle}
                  placeholder={placeholder}
                  onChange={handleChange}
                  value={values[name]}
                />
              ))}
              <Select
                label="Country"
                name="country"
                value={values.country}
                placeholder="Select a country..."
                handleChange={handleChange}
                selectOptions={["Canada", "United States"]}
                style={{ width: "100%" }}
              />
              <BlockContainer style={styles.blockContainer}>
                <Toggle
                  style={{ marginTop: "10px" }}
                  value={toggleState}
                  handleClick={toggleSwitch}
                />
                <Label style={styles.label}>Same as billing address</Label>
              </BlockContainer>
              <Button style={styles.button} type="submit">
                <FaUserPlus style={styles.icon} />
                Register
              </Button>
            </Form>
          </Column>
          <Column width="25%" align="flex-end" style={styles.column2}>
            <ShowCodeButton
              style={styles.showCodeButton}
              showCode={showCode}
              toggleShowCode={toggleShowCode}
            />
          </Column>
        </Row>
      </BlockContainer>
      <ShowCode showCode={showCode} fileName="Forms/Registration.js" />
    </>
  );
};

export default RegistrationExample;
