import React, { useState, useEffect, useCallback, useRef } from "react";
import PropTypes from "prop-types";
import InlineBlockContainer from "../../InlineBlockContainer";

const ClickHandler = ({ children, handleChange, width }) => {
  const wrapperRef = useRef();
  const [isVisible, setVisible] = useState(false);

  const handleClickOutside = useCallback(
    ({ target }) => {
      if (isVisible && wrapperRef && !wrapperRef.current.contains(target)) {
        setVisible(false);
      }
    },
    [isVisible, wrapperRef]
  );

  const handleSelectClick = () => {
    setVisible(visible => !visible);
  };

  const handleOptionSelect = e => {
    setVisible(false);
    handleChange(e);
  };

  useEffect(
    () => {
      document.addEventListener("mousedown", handleClickOutside);

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    },
    [handleClickOutside]
  );

  return (
    <InlineBlockContainer width={width} ref={wrapperRef}>
      {children({
        isVisible,
        handleSelectClick,
        handleOptionSelect
      })}
    </InlineBlockContainer>
  );
};

ClickHandler.propTypes = {
  handleChange: PropTypes.func.isRequired,
  children: PropTypes.func.isRequired,
  width: PropTypes.string
};

export default ClickHandler;
