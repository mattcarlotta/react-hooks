import React from "react";
import PropTypes from "prop-types";
import { MdClose } from "react-icons/md";
import Input from "../Input";
import Button from "../Button";
import Row from "../Row";
import Column from "../Column";

const RemoveableField = ({
  fields,
  fieldsCount,
  handleChange,
  deleteField
}) => {
  return fields.map(({ name, value }, key) => (
    <Row key={name} style={{ marginBottom: 20 }}>
      <Column width={`${fieldsCount > 1 ? "85%" : "100%"}`}>
        <Input
          type="text"
          name={name}
          placeholder="Type something..."
          onChange={handleChange}
          value={value}
          containerStyle={{ width: "100%" }}
        />
      </Column>
      {fieldsCount > 1 && (
        <Column width="15%" align="flex-end">
          <Button style={{ float: "right" }} onClick={() => deleteField(name)}>
            <MdClose style={{ verticalAlign: "middle" }} />
          </Button>
        </Column>
      )}
    </Row>
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
