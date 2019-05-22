import React from "react";
import PropTypes from "prop-types";
import {
  ClickBox,
  Example,
  KeyListener,
  FlexContainer,
  ShowCode,
  ShowCodeButton,
  SubTitle
} from "../../../Body";
import { AnchorLink } from "../../../Navigation";
import { useToggle } from "../../../Hooks";

const KeyListenerExample = ({ innerRef }) => {
  const [showCode, toggleShowCode] = useToggle(false);

  return (
    <>
      <SubTitle id="keydown" ref={innerRef}>
        <AnchorLink to="/examples/events#keydown" />
        Key Down
      </SubTitle>
      <FlexContainer>
        <Example>
          <KeyListener />
          <ClickBox>Press the enter key!</ClickBox>
        </Example>
        <ShowCodeButton showCode={showCode} toggleShowCode={toggleShowCode} />
      </FlexContainer>
      <ShowCode showCode={showCode} fileName="EventListeners/KeyListener.js" />
    </>
  );
};

KeyListenerExample.propTypes = {
  innerRef: PropTypes.func.isRequired
};

export default KeyListenerExample;
