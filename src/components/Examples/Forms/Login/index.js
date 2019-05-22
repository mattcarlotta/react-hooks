import React from "react";
import {
  BlockContainer,
  Button,
  Checkbox,
  Column,
  DummyLink,
  Form,
  Label,
  Input,
  Row,
  ShowCode,
  ShowCodeButton,
  SubTitle
} from "../../../Body";
import { AnchorLink } from "../../../Navigation";
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
  dummyLink: {
    float: "right",
    fontSize: "16px",
    lineHeight: "25px"
  },
  label: {
    fontSize: "16px"
  },
  showCodeButton: {
    float: "right"
  }
};

const LoginExample = () => {
  const { values, handleChange } = useFormHandler({
    username: "",
    password: ""
  });
  const [rememberUser, toggleRememberUser] = useToggle(false);
  const [showCode, toggleShowCode] = useToggle(false);

  const handleSubmit = e => {
    e.preventDefault();
    const formProps = { ...values, rememberUser };
    alert(JSON.stringify(formProps, null, 4));
  };

  return (
    <>
      <SubTitle id="loginform">
        <AnchorLink to="/examples/forms#loginform" />
        Login Form
      </SubTitle>
      <BlockContainer>
        <Row>
          <Column width="75%">
            <Form onSubmit={handleSubmit}>
              <Input
                type="text"
                name="username"
                containerStyle={styles.containerStyle}
                placeholder="Username"
                onChange={handleChange}
                value={values.username}
              />
              <Input
                type="password"
                name="password"
                containerStyle={styles.containerStyle}
                placeholder="Password"
                onChange={handleChange}
                value={values.password}
              />
              <BlockContainer style={styles.blockContainer}>
                <Checkbox
                  value={rememberUser}
                  handleChange={toggleRememberUser}
                />
                <Label style={styles.label}>Remember Me</Label>
                <DummyLink style={styles.dummyLink} href="#">
                  Forgot Password
                </DummyLink>
              </BlockContainer>
              <Button style={styles.button} type="submit">
                Log in
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
      <ShowCode showCode={showCode} fileName="Forms/Login.js" />
    </>
  );
};

export default LoginExample;
