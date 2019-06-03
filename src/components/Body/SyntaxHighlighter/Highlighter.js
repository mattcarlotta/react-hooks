import React from "react";
import PropTypes from "prop-types";
import { Prism } from "react-syntax-highlighter";
import atomDark from "react-syntax-highlighter/dist/styles/prism/atom-dark";

const Highlighter = ({ className, children }) => (
  <Prism className={className} language="jsx" style={atomDark}>
    {children}
  </Prism>
);

Highlighter.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
};

export default Highlighter;
