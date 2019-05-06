import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { FaBell } from "react-icons/fa";
import { resetMessage } from "../../actions/messageActions";
import MessageContainer from "./MessageContainer";
import WindowContainer from "./WindowContainer";
import AlertContainer from "./AlertContainer";
import TextContainer from "./TextContainer";
import ButtonContainer from "./ButtonContainer";
import CloseButton from "./CloseButton";

const Message = ({ message, resetMessage }) =>
  message ? (
    <WindowContainer>
      <MessageContainer>
        <AlertContainer>
          <FaBell />
        </AlertContainer>
        <TextContainer>{message}</TextContainer>
        <ButtonContainer>
          <CloseButton handleClick={resetMessage} />
        </ButtonContainer>
      </MessageContainer>
    </WindowContainer>
  ) : null;

Message.propTypes = {
  message: PropTypes.string,
  resetMessage: PropTypes.func.isRequired
};

export default connect(
  state => ({ message: state.message }),
  { resetMessage }
)(Message);
