import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import {
  BlockContainer,
  Button,
  Column,
  DisplayCounter,
  Label,
  ResetButton,
  Row,
  ShowCode,
  ShowCodeButton,
  SubTitle
} from "../../../Body";
import { AnchorLink } from "../../../Navigation";
import { useCounter, useToggle } from "../../../Hooks";

const styles = {
  column1: {
    padding: "10px 5px"
  },
  column2: {
    padding: "10px 0"
  },
  showCodeButton: {
    float: "right"
  }
};

const CounterExample = () => {
  const { decValue, incValue, resetValue, value } = useCounter(0);

  const [showCode, toggleShowCode] = useToggle(false);

  return (
    <>
      <SubTitle id="simplecounter">
        <AnchorLink to="/examples/misc#simplecounter" />
        Simple Counter
      </SubTitle>
      <BlockContainer>
        <Row>
          <Column width="75%">
            <BlockContainer style={styles.column1}>
              <Label>Counter:</Label>
              <Button onClick={decValue}>
                <FaMinus />
              </Button>
              <DisplayCounter>{value}</DisplayCounter>
              <Button onClick={incValue}>
                <FaPlus />
              </Button>
              <ResetButton style={styles.reset} handleClick={resetValue} />
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
        link="https://codesandbox.io/s/react-hooks-guide-simple-counter-wvp3s?fontsize=14"
        showCode={showCode}
        fileName="Misc/Counter.js"
      />
    </>
  );
};

export default CounterExample;
