import React from "react";
import {
  ClickBox,
  Example,
  KeyListener,
  FlexContainer,
  ShowCode,
  ShowCodeButton,
  SubTitle
} from "../../../Body";
import { useToggle } from "../../../Hooks";

const KeyListenerExample = () => {
  const [showCode, toggleShowCode] = useToggle(false);

  return (
    <>
      <SubTitle>Key Down</SubTitle>
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

export default KeyListenerExample;
