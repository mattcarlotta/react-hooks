import React from "react";
import Helmet from "react-helmet";
import { MdCode } from "react-icons/md";
import { Paragraph, Title } from "../../../components/Body";
import { DragNDropExample } from "../../../components/Examples";

const Misc = () => (
  <>
    <Helmet title="Miscelleanous" />
    <Title>Miscelleanous</Title>
    <Paragraph>
      Below are examples of miscelleanous implementations. To view the source
      code, click the <MdCode style={{ verticalAlign: "middle" }} /> button.
    </Paragraph>
    <DragNDropExample />
  </>
);

export default Misc;
