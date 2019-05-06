import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  FaBell,
  FaExclamationTriangle,
  FaSkullCrossbones
} from "react-icons/fa";
import { Transition } from "react-transition-group";
import { hideMessage, resetMessage } from "../../actions/messageActions";
import MessageContainer from "./MessageContainer";
import WindowContainer from "./WindowContainer";
import AlertContainer from "./AlertContainer";
import TextContainer from "./TextContainer";
import ButtonContainer from "./ButtonContainer";
import CloseButton from "./CloseButton";

const alertType = type => {
  switch (type) {
    case "alert":
      return <FaBell />;
    case "warning":
      return <FaExclamationTriangle />;
    default:
      return <FaSkullCrossbones />;
  }
};

const Message = ({ hideMessage, message, resetMessage, show, type }) => (
  <Transition
    mountOnEnter
    unmountOnExit
    in={show}
    timeout={350}
    onExited={resetMessage}
  >
    {state => (
      <WindowContainer state={state}>
        <MessageContainer type={type}>
          <AlertContainer>{alertType(type)}</AlertContainer>
          <TextContainer>{message}</TextContainer>
          <ButtonContainer>
            <CloseButton handleClick={hideMessage} />
          </ButtonContainer>
        </MessageContainer>
      </WindowContainer>
    )}
  </Transition>
);

Message.propTypes = {
  hideMessage: PropTypes.func.isRequired,
  message: PropTypes.string,
  resetMessage: PropTypes.func.isRequired,
  show: PropTypes.bool,
  type: PropTypes.string
};

export default connect(
  ({ messages }) => ({
    message: messages.message,
    show: messages.show,
    type: messages.type
  }),
  { hideMessage, resetMessage }
)(Message);
