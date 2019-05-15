import React from "react";
import PropTypes from "prop-types";
import {
  Example,
  FlexContainer,
  Input,
  Label,
  ResetButton,
  ShowCode,
  ShowCodeButton,
  SubTitle
} from "../../../Body";
import { AnchorLink } from "../../../Navigation";
import { useProvider, useToggle } from "../../../Hooks";

const ContextExample = ({ innerRef }) => {
  const { value, handleChange, resetValue } = useProvider();
  const [showCode, toggleShowCode] = useToggle(false);

  return (
    <>
      <SubTitle ref={innerRef}>
        <AnchorLink to="/examples/misc#contextpersistence" />
        Context Persistence
      </SubTitle>
      <FlexContainer>
        <Example>
          <Label>Input:</Label>
          <Input
            type="text"
            placeholder="Add some text to persist..."
            onChange={handleChange}
            value={value}
          />
          <ResetButton handleClick={resetValue} />
        </Example>
        <ShowCodeButton showCode={showCode} toggleShowCode={toggleShowCode} />
      </FlexContainer>
      <ShowCode showCode={showCode} fileName="Misc/Context.js" />
    </>
  );
};

ContextExample.propTypes = {
  innerRef: PropTypes.func.isRequired
};

export default ContextExample;
