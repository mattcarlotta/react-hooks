import React from "react";
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

const Misc = () => (
  <>
    <Helmet title="Miscelleanous" />
    <Title>Miscelleanous</Title>
    <Paragraph>
      Below are examples of miscelleanous implementations. To view the source
      code, click the <MdCode style={{ verticalAlign: "middle" }} /> button.
    </Paragraph>
    <CounterExample />
    <TimerExample />
    <DragNDropExample />
    <LocalStorageExample />
    <ContextExample />
    <ReduxExample />
    <FetchDataExample />
  </>
);

export default Misc;
