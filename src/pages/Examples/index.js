import React from "react";
import { MdCode } from "react-icons/md";
import { Paragraph, Title } from "../../components/Body";
import { InputExample, ToggleExample } from "../../components/Examples";

const Examples = () => (
  <>
    <Title>Examples</Title>
    <Paragraph>
      Below are some example of using React Hooks. To view the source code,
      click the <MdCode style={{ verticalAlign: "middle" }} /> button.
    </Paragraph>
    <ToggleExample />
    <InputExample />
  </>
);

export default Examples;
