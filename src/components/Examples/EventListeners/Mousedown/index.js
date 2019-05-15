import React from "react";
import PropTypes from "prop-types";
import {
  ClickBox,
  ClickHandler,
  Example,
  FlexContainer,
  ShowCode,
  ShowCodeButton,
  SubTitle
} from "../../../Body";
import { AnchorLink } from "../../../Navigation";
import { useToggle } from "../../../Hooks";

const MousedownExample = ({ innerRef }) => {
  const [showCode, toggleShowCode] = useToggle(false);

  return (
    <>
      <SubTitle ref={innerRef}>
        <AnchorLink to="/examples/events#mousedown" />
        Mouse Down
      </SubTitle>
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

MousedownExample.propTypes = {
  innerRef: PropTypes.func.isRequired
};

export default MousedownExample;
