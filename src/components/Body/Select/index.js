import React from "react";
import PropTypes from "prop-types";
import ClickHandler from "./ClickHandler";
import Selection from "./Selection";
import SelectBox from "./SelectBox";
import SelectContainer from "./SelectContainer";
import Options from "./Options";

const Select = ({ handleChange, name, selectOptions, value, ...props }) => (
  <ClickHandler handleChange={handleChange} selectOptions={selectOptions}>
    {handlers => (
      <SelectContainer>
        <SelectBox>
          <Selection {...handlers} {...props} value={value} />
          <Options
            {...handlers}
            name={name}
            selectOptions={selectOptions}
            selected={value}
          />
        </SelectBox>
      </SelectContainer>
    )}
  </ClickHandler>
);

Select.propTypes = {
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  selectOptions: PropTypes.arrayOf(PropTypes.string.isRequired),
  value: PropTypes.string
};

export default Select;
