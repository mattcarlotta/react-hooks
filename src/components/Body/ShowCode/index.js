import React, { useState, useLayoutEffect } from "react";
import PropTypes from "prop-types";
import { SyntaxHighlighter } from "../";

const ShowCode = ({ fileName, showCode }) => {
  const [loadedFile, setLoadedFile] = useState("");

  useLayoutEffect(() => {
    const setDummyCode = async () => {
      try {
        const {
          default: file
        } = await import(/* webpackMode: "lazy" */ `../../Code/${fileName}`);
        setLoadedFile(file);
      } catch (e) {
        setLoadedFile("Error loading file.");
      }
    };
    setDummyCode();
  }, [fileName]);

  return showCode ? (
    <SyntaxHighlighter language="javascript">{loadedFile}</SyntaxHighlighter>
  ) : null;
};

ShowCode.propTypes = {
  fileName: PropTypes.string.isRequired,
  showCode: PropTypes.bool.isRequired
};

export default ShowCode;
