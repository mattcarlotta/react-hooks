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
import { hideMessage, setMessage } from "../../../../actions/messageActions";
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

const ReduxExample = ({
  hideMessage,
  inputValue,
  resetInput,
  setMessage,
  showingMessage,
  updateInput
}) => {
  const [showCode, toggleShowCode] = useToggle(false);

  const handleChange = useCallback(
    ({ target: { value } }) => {
      if (showingMessage) hideMessage();
      updateInput(value);
    },
    [hideMessage, showingMessage, updateInput]
  );

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      if (inputValue && inputValue.length <= 150) {
        setMessage({ message: inputValue, type: "alert" });
      } else if (!inputValue) {
        if (showingMessage) hideMessage();
        setTimeout(
          () =>
            setMessage({
              message: "You need to add a message first!",
              type: "warning"
            }),
          300
        );
      } else {
        setMessage({
          message: "Aaawwwhhh, you killed it! You killed my component...",
          type: "error"
        });
      }
      resetInput();
    },
    [hideMessage, inputValue, resetInput, setMessage, showingMessage]
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
      <ShowCode
        link="https://codesandbox.io/s/react-hooks-guide-redux-persistence-05h18?fontsize=14"
        showCode={showCode}
        message="Due to the complexity of implementing and utilizing Redux, please see the codesandbox example instead."
        fileName="Misc/Redux.js"
      />
    </>
  );
};

ReduxExample.propTypes = {
  hideMessage: PropTypes.func.isRequired,
  inputValue: PropTypes.string,
  resetInput: PropTypes.func.isRequired,
  setMessage: PropTypes.func.isRequired,
  showingMessage: PropTypes.bool,
  updateInput: PropTypes.func.isRequired
};

export default connect(
  state => ({ inputValue: state.input, showingMessage: state.messages.show }),
  { hideMessage, resetInput, setMessage, updateInput }
)(ReduxExample);
