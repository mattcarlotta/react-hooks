import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { FaBell } from "react-icons/fa";
import { Transition } from "react-transition-group";
import { hideMessage, resetMessage } from "../../actions/messageActions";
import MessageContainer from "./MessageContainer";
import WindowContainer from "./WindowContainer";
import AlertContainer from "./AlertContainer";
import TextContainer from "./TextContainer";
import ButtonContainer from "./ButtonContainer";
import CloseButton from "./CloseButton";

const Message = ({ hideMessage, message, resetMessage, show }) => (
  <Transition
    mountOnEnter
    unmountOnExit
    in={show}
    timeout={350}
    onExited={resetMessage}
  >
    {state => (
      <WindowContainer state={state}>
        <MessageContainer>
          <AlertContainer>
            <FaBell />
          </AlertContainer>
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
  show: PropTypes.bool
};

export default connect(
  state => ({ message: state.messages.message, show: state.messages.show }),
  { hideMessage, resetMessage }
)(Message);
