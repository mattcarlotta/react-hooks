import React, { createRef, useState, useEffect } from "react";
import PropTypes from "prop-types";

const ClickHandler = ({ children, handleChange }) => {
  const wrapperRef = createRef();
  const [isVisible, setVisible] = useState(false);

  const handleClickOutside = ({ target }) => {
    if (isVisible && wrapperRef && !wrapperRef.current.contains(target)) {
      setVisible(false);
    }
  };

  const handleSelectClick = () => {
    setVisible(visible => !visible);
  };

  const handleOptionSelect = props => {
    setVisible(false);
    handleChange({ ...props });
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <div ref={wrapperRef}>
      {children({
        isVisible,
        handleSelectClick,
        handleOptionSelect
      })}
    </div>
  );
};

ClickHandler.propTypes = {
  handleChange: PropTypes.func.isRequired,
  children: PropTypes.func.isRequired
};

export default ClickHandler;
