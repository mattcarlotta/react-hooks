import React from "react";
import fs from "fs";
import path from "path";
import Pre from "./Pre";
import Code from "./Code";

const ShowCode = ({ fileName, showCode }) => {
  let file;
  try {
    file = fs
      .readFileSync(path.join(__dirname, `../../DummyCode/${fileName}`))
      .toString();
  } catch (e) {
    file = "Error loading file.";
  }

  return showCode ? (
    <Pre>
      <Code>{file}</Code>
    </Pre>
  ) : null;
};

export default ShowCode;
