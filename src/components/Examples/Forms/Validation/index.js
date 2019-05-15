import React from "react";
import PropTypes from "prop-types";
import { FaRegCalendarCheck } from "react-icons/fa";
import {
  BlockContainer,
  Button,
  Column,
  Form,
  Input,
  InputContainer,
  Label,
  ResetButton,
  Row,
  ShowCode,
  ShowCodeButton,
  SubTitle
} from "../../../Body";
import { AnchorLink } from "../../../Navigation";
import { useFieldValidator, useToggle } from "../../../Hooks";

const styles = {
  column2: {
    padding: "20px 0"
  },
  form: {
    padding: "0px",
    marginBottom: "20px"
  },
  icon: {
    position: "relative",
    top: "2px",
    fontSize: "20px"
  },
  reset: {
    marginLeft: "0px"
  },
  showCodeButton: {
    float: "right"
  },
  submit: {
    float: "right"
  }
};

const fields = [
  { fieldName: "name", value: "", error: "" },
  { fieldName: "email", value: "", error: "" },
  { fieldName: "phone", value: "", error: "" }
];

const ValidationExample = ({ innerRef }) => {
  const { values, handleChange, handleSubmit, resetValues } = useFieldValidator(
    {
      fields
    }
  );
  const [showCode, toggleShowCode] = useToggle(false);

  return (
    <>
      <SubTitle ref={innerRef}>
        <AnchorLink to="/examples/forms#fieldvalidation" />
        Field Validation
      </SubTitle>
      <BlockContainer>
        <Row>
          <Column width="75%">
            <Form onSubmit={handleSubmit}>
              <BlockContainer style={styles.form}>
                {values.fields.map(({ fieldName, value, error }) => (
                  <InputContainer error={error} key={fieldName}>
                    <Label style={{ display: "inline-block", width: "12%" }}>
                      {fieldName}:{" "}
                    </Label>
                    <Input
                      type="text"
                      name={fieldName}
                      placeholder="Type something..."
                      onChange={handleChange}
                      value={value}
                      errors={error}
                      containerStyle={{ width: "85%" }}
                    />
                  </InputContainer>
                ))}
              </BlockContainer>
              <ResetButton
                handleClick={resetValues}
                style={styles.reset}
                text="Reset"
              />
              <Button style={styles.submit} type="submit">
                <FaRegCalendarCheck style={styles.icon} /> Validate
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
      <ShowCode showCode={showCode} fileName="Forms/Validation.js" />
    </>
  );
};

ValidationExample.propTypes = {
  innerRef: PropTypes.func.isRequired
};

export default ValidationExample;
