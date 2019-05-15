import React from "react";
import PropTypes from "prop-types";
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

const CounterExample = ({ innerRef }) => {
  const { decValue, incValue, resetValue, value } = useCounter(0);

  const [showCode, toggleShowCode] = useToggle(false);

  return (
    <>
      <SubTitle ref={innerRef}>
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
      <ShowCode showCode={showCode} fileName="Misc/Counter.js" />
    </>
  );
};

CounterExample.propTypes = {
  innerRef: PropTypes.func
};

export default CounterExample;
