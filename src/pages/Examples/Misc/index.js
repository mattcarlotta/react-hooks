import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { MdCode } from "react-icons/md";
import { Paragraph, Title } from "../../../components/Body";
import {
  ContextExample,
  CounterExample,
  DragNDropExample,
  FetchDataExample,
  LocalStorageExample,
  ReduxExample,
  TimerExample
} from "../../../components/Examples";
import { useScroll } from "../../../components/Hooks";

const Misc = ({ location: { hash } }) => {
  const currentHash = hash.substr(1);
  const [counterRef] = useScroll(currentHash);
  const [timerRef] = useScroll(currentHash);
  const [dragndropRef] = useScroll(currentHash);
  const [localstorageRef] = useScroll(currentHash);
  const [contextRef] = useScroll(currentHash);
  const [reduxRef] = useScroll(currentHash);
  const [apiRef] = useScroll(currentHash);

  return (
    <>
      <Helmet title="Miscelleanous" />
      <Title>Miscelleanous</Title>
      <Paragraph>
        Below are examples of miscelleanous implementations. To view the source
        code, click the <MdCode style={{ verticalAlign: "middle" }} /> button.
      </Paragraph>
      <CounterExample innerRef={counterRef} />
      <TimerExample innerRef={timerRef} />
      <DragNDropExample innerRef={dragndropRef} />
      <LocalStorageExample innerRef={localstorageRef} />
      <ContextExample innerRef={contextRef} />
      <ReduxExample innerRef={reduxRef} />
      <FetchDataExample innerRef={apiRef} />
    </>
  );
};

Misc.propTypes = {
  hash: PropTypes.string
};

export default Misc;
