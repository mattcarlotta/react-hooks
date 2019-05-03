import React from "react";
import {
  ClickBox,
  ClickHandler,
  Example,
  FlexContainer,
  ShowCode,
  ShowCodeButton,
  SubTitle
} from "../../../Body";
import { useToggle } from "../../../Hooks";

const MousedownExample = () => {
  const [showCode, toggleShowCode] = useToggle(false);

  return (
    <>
      <SubTitle>Mouse Down</SubTitle>
      <FlexContainer>
        <Example>
          <ClickHandler>
            <ClickBox cursor="default">Click me!</ClickBox>
          </ClickHandler>
        </Example>
        <ShowCodeButton showCode={showCode} toggleShowCode={toggleShowCode} />
      </FlexContainer>
      <ShowCode showCode={showCode} fileName="EventListeners/Mousedown.js" />
    </>
  );
};

export default MousedownExample;
