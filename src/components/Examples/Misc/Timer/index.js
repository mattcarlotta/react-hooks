import React from "react";
import PropTypes from "prop-types";
import { FaPlay, FaPause } from "react-icons/fa";
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
import { useTimer, useToggle } from "../../../Hooks";

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

const TimerExample = ({ innerRef }) => {
  const {
    currentTime,
    isRunning,
    pauseTimer,
    resetTimer,
    startTimer
  } = useTimer(false);
  const [showCode, toggleShowCode] = useToggle(false);

  return (
    <>
      <SubTitle ref={innerRef}>
        <AnchorLink to="/examples/misc#intervaltimer" />
        Interval Timer
      </SubTitle>
      <BlockContainer>
        <Row>
          <Column width="75%">
            <BlockContainer style={styles.column1}>
              <Label>Timer:</Label>
              {isRunning ? (
                <Button onClick={pauseTimer}>
                  <FaPause />
                </Button>
              ) : (
                <Button onClick={startTimer}>
                  <FaPlay />
                </Button>
              )}

              <DisplayCounter>
                <span>0:</span>
                <span>
                  {currentTime < 10 ? `0${currentTime}` : currentTime}
                </span>
                <span>s</span>
              </DisplayCounter>
              <ResetButton handleClick={resetTimer} />
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
      <ShowCode showCode={showCode} fileName="Misc/Timer.js" />
    </>
  );
};

TimerExample.propTypes = {
  innerRef: PropTypes.func.isRequired
};

export default TimerExample;
