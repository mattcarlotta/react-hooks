import React from "react";
import PropTypes from "prop-types";
import ClickHandler from "./ClickHandler";
import Selection from "./Selection";
import SelectBox from "./SelectBox";
import SelectContainer from "./SelectContainer";
import Options from "./Options";

const Select = ({ name, selectOptions, value, ...props }) => (
  <ClickHandler selectOptions={selectOptions} {...props}>
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
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  selectOptions: PropTypes.arrayOf(PropTypes.string.isRequired),
  value: PropTypes.string
};

export default Select;
