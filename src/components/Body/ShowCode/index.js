import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import fs from "fs";
import path from "path";
import Highlight from "../Highlight";

const ShowCode = ({ fileName, showCode }) => {
  const [loadedFile, setLoadedFile] = useState("");

  useEffect(() => {
    const convertFileToText = () => {
      try {
        const file = fs
          .readFileSync(path.join(__dirname, `../../DummyCode/${fileName}`))
          .toString();

        return file;
      } catch (e) {
        return "Error loading file.";
      }
    };

    const textFile = convertFileToText();

    setLoadedFile(textFile);
  }, [fileName]);

  return showCode ? (
    <Highlight language="javascript">{loadedFile}</Highlight>
  ) : null;
};

ShowCode.propTypes = {
  fileName: PropTypes.string.isRequired,
  showCode: PropTypes.bool.isRequired
};

export default ShowCode;
