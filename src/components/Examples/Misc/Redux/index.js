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
import { AnchorLink } from "../../../Navigation";
import { useToggle } from "../../../Hooks";
import { setMessage } from "../../../../actions/messageActions";
import { resetInput, updateInput } from "../../../../actions/inputActions";

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
    padding: "0 0 5px 0"
  },
  showCodeButton: {
    float: "right"
  },
  submit: {
    width: "100%"
  }
};

const ReduxExample = ({ inputValue, resetInput, setMessage, updateInput }) => {
  const [showCode, toggleShowCode] = useToggle(false);

  const handleChange = useCallback(
    ({ target: { value } }) => {
      updateInput(value);
    },
    [updateInput]
  );

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      if (inputValue && inputValue.length <= 150) {
        setMessage({ message: inputValue, type: "alert" });
      } else if (!inputValue) {
        setMessage({
          message: "You need to add a message first!",
          type: "warning"
        });
      } else {
        setMessage({
          message: "Aaawwwhhh, you killed it! You killed my component...",
          type: "error"
        });
      }
      resetInput();
    },
    [inputValue, resetInput, setMessage]
  );

  return (
    <>
      <SubTitle id="reduxpersistence">
        <AnchorLink to="/examples/misc#reduxpersistence" />
        Redux Persistence
      </SubTitle>
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
                    value={inputValue}
                  />
                  <ResetButton handleClick={resetInput} />
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
  inputValue: PropTypes.string,
  resetInput: PropTypes.func.isRequired,
  setMessage: PropTypes.func.isRequired,
  updateInput: PropTypes.func.isRequired
};

export default connect(
  state => ({ inputValue: state.input }),
  { resetInput, setMessage, updateInput }
)(ReduxExample);
