import React from "react";
import PropTypes from "prop-types";
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

ShowCode.propTypes = {
  fileName: PropTypes.string.isRequired,
  showCode: PropTypes.bool.isRequired
};

export default ShowCode;
