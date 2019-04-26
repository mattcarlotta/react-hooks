import React from "react";
import PropTypes from "prop-types";
import { MdClose } from "react-icons/md";
import Input from "../Input";
import Button from "../Button";

const RemoveableField = ({
  fields,
  fieldsCount,
  handleChange,
  deleteField
}) => {
  const containerStyle =
    fieldsCount > 1 ? { width: "82%", marginRight: "10px" } : { width: "100%" };
  return fields.map(({ name, value }, key) => (
    <div key={name} style={{ marginBottom: 20 }}>
      <Input
        type="text"
        name={name}
        placeholder="Type something..."
        onChange={handleChange}
        value={value}
        containerStyle={containerStyle}
      />
      {fieldsCount > 1 && (
        <Button onClick={() => deleteField(name)} disabled={fieldsCount === 1}>
          <MdClose style={{ verticalAlign: "middle" }} />
        </Button>
      )}
    </div>
  ));
};

RemoveableField.propTypes = {
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      value: PropTypes.string
    })
  ).isRequired,
  fieldsCount: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
  deleteField: PropTypes.func.isRequired
};

export default RemoveableField;
