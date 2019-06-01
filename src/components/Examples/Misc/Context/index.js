import React from "react";
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

const ContextExample = () => {
  const { value, handleChange, resetValue } = useProvider();
  const [showCode, toggleShowCode] = useToggle(false);

  return (
    <>
      <SubTitle id="contextpersistence">
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
      <ShowCode
        link="https://codesandbox.io/s/react-hooks-guide-context-persistence-lqy0r?fontsize=14"
        showCode={showCode}
        fileName="Misc/Context.js"
      />
    </>
  );
};

export default ContextExample;
