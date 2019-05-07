import React, {
  useState,
  useLayoutEffect,
  useCallback,
  useEffect
} from "react";
import PropTypes from "prop-types";
import copy from "copy-to-clipboard";
import { BlockContainer, CopyButton, SyntaxHighlighter } from "../index";

const styles = {
  container: {
    borderRadius: 0
  }
};

const ShowCode = ({ fileName, showCode }) => {
  const [loadedFile, setLoadedFile] = useState("");
  const [copied, setCopied] = useState(false);

  const handleClick = useCallback(() => {
    setCopied(true);
    copy(loadedFile, {
      format: "text/plain"
    });
  }, [loadedFile]);

  useEffect(() => {
    if (!showCode) {
      setCopied(false);
    }
  }, [showCode]);

  useLayoutEffect(() => {
    const setDummyCode = async () => {
      try {
        const {
          default: file
        } = await import(/* webpackMode: "lazy" */ `../../Code/${fileName}`);
        setLoadedFile(file);
      } catch (e) {
        setLoadedFile(`Error loading file:\n ${e.toString()}`);
      }
    };
    setDummyCode();
  }, [fileName]);

  return showCode ? (
    <BlockContainer style={styles.container}>
      <SyntaxHighlighter language="javascript">{loadedFile}</SyntaxHighlighter>
      <CopyButton copied={copied} onClick={handleClick} />
    </BlockContainer>
  ) : null;
};

ShowCode.propTypes = {
  fileName: PropTypes.string.isRequired,
  showCode: PropTypes.bool.isRequired
};

export default ShowCode;
