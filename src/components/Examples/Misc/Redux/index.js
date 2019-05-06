import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { FaPaperPlane } from "react-icons/fa";
import {
  Button,
  BlockContainer,
  Column,
  Form,
  Input,
  Label,
  ResetButton,
  Row,
  ShowCode,
  ShowCodeButton,
  SubTitle
} from "../../../Body";
import { useEventHandler, useToggle } from "../../../Hooks";
import { setMessage } from "../../../../actions/messageActions";

const styles = {
  column1: {
    padding: "10px 0 0 0"
  },
  column2: {
    padding: "10px 0"
  },
  form: {
    padding: "0"
  },
  row: {
    padding: "0 105px 5px 108px"
  },
  showCodeButton: {
    float: "right"
  },
  submit: {
    width: "100%"
  }
};

const ReduxExample = ({ setMessage }) => {
  const { value, handleChange, resetValue } = useEventHandler("");
  const [showCode, toggleShowCode] = useToggle(false);

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      if (value) {
        setMessage(value);
        resetValue();
      }
    },
    [resetValue, setMessage, value]
  );

  return (
    <>
      <SubTitle>Redux</SubTitle>
      <BlockContainer>
        <Row>
          <Column width="75%">
            <BlockContainer style={styles.column1}>
              <Form onSubmit={handleSubmit} style={styles.form}>
                <BlockContainer style={styles.column2}>
                  <Label>Message:</Label>
                  <Input
                    type="text"
                    placeholder="Add a message..."
                    onChange={handleChange}
                    value={value}
                  />
                  <ResetButton handleClick={resetValue} />
                </BlockContainer>
                <BlockContainer style={styles.row}>
                  <Button type="submit" style={styles.submit}>
                    <FaPaperPlane /> Send Message
                  </Button>
                </BlockContainer>
              </Form>
            </BlockContainer>
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
      <ShowCode showCode={showCode} fileName="Misc/Redux.js" />
    </>
  );
};

ReduxExample.propTypes = {
  setMessage: PropTypes.func.isRequired
};

export default connect(
  null,
  { setMessage }
)(ReduxExample);
