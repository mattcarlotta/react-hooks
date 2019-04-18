import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import hljs from "highlight.js";
import "highlight.js/styles/gruvbox-light.css";
import Pre from "./Pre";
import Code from "./Code";

const Highlight = ({ children }) => {
  const highlightRef = useRef(null);

  useEffect(() => {
    const highlightCode = () => {
      const nodes = highlightRef.current.querySelectorAll("pre code");

      for (let i = 0; i < nodes.length; i++) {
        hljs.highlightBlock(nodes[i]);
      }
    };

    highlightCode();
  }, []);

  return (
    <Pre ref={highlightRef}>
      <Code className="javascript">{children}</Code>
    </Pre>
  );
};

Highlight.propTypes = {
  children: PropTypes.string.isRequired
};

export default Highlight;
