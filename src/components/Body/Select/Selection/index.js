import React from "react";
import PropTypes from "prop-types";
import ChevronIcon from "../ChevronIcon";
import DisplayOption from "../DisplayOption";
import SelectionContainer from "../SelectionContainer";
import SelectText from "../SelectText";

const Selection = ({ handleSelectClick, isVisible, placeholder, value }) => (
  <SelectionContainer isVisible={isVisible}>
    <SelectText handleSelectClick={handleSelectClick}>
      <DisplayOption value={value}>
        {!value ? placeholder : value}
      </DisplayOption>
      <ChevronIcon isVisible={isVisible} />
    </SelectText>
  </SelectionContainer>
);

Selection.propTypes = {
  handleSelectClick: PropTypes.func.isRequired,
  isVisible: PropTypes.bool.isRequired,
  value: PropTypes.string,
  placeholder: PropTypes.string
};

export default Selection;
