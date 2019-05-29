import React from "react";
import { MdAdd } from "react-icons/md";
import {
  AddField,
  BlockContainer,
  Button,
  Column,
  Form,
  RemoveableField,
  Row,
  ShowCode,
  ShowCodeButton,
  SubTitle
} from "../../../Body";
import { AnchorLink } from "../../../Navigation";
import { useDynamicFieldHandler, useToggle } from "../../../Hooks";
import { createRandomString } from "../../../../utils/helpers";

const styles = {
  containerStyle: {
    display: "block",
    marginBottom: "24px",
    width: "100%"
  },
  blockContainer: {
    padding: "0px",
    marginBottom: "20px"
  },
  button: {
    width: "100%"
  },
  column2: {
    padding: "20px 0"
  },
  icon: {
    verticalAlign: "middle",
    marginRight: "5px"
  },
  label: {
    fontSize: "16px",
    position: "relative",
    top: "-10px",
    marginLeft: "5px"
  },
  showCodeButton: {
    float: "right"
  }
};

const DynamicFieldExample = ({ innerRef }) => {
  const {
    addField,
    deleteField,
    handleChange,
    values
  } = useDynamicFieldHandler({
    fieldsCount: 1,
    fields: [
      {
        name: `Field_${createRandomString()}`,
        position: 1,
        value: ""
      }
    ]
  });

  const [showCode, toggleShowCode] = useToggle(false);

  const handleSubmit = e => {
    e.preventDefault();
    alert(JSON.stringify(values, null, 4));
  };

  return (
    <>
      <SubTitle id="dynamicfieldsform">
        <AnchorLink to="/examples/forms#dynamicfieldsform" />
        Dynamic Fields Form
      </SubTitle>
      <BlockContainer>
        <Row>
          <Column width="75%">
            <Form onSubmit={handleSubmit}>
              <RemoveableField
                {...values}
                deleteField={deleteField}
                handleChange={handleChange}
              />
              <AddField type="button" onClick={addField}>
                <MdAdd style={{ verticalAlign: "middle" }} /> Add Field
              </AddField>
              <Button style={styles.button} type="submit">
                Submit
              </Button>
            </Form>
          </Column>
          <Column width="25%" align="flex-end" style={styles.column2}>
            <ShowCodeButton
              style={styles.showCodeButton}
              showCode={showCode}
              toggleShowCode={toggleShowCode}
            />
          </Column>
        </Row>
      </BlockContainer>
      <ShowCode
        link="https://codesandbox.io/s/react-hooks-guide-dynamic-fields-form-b1531?fontsize=14"
        showCode={showCode}
        fileName="Forms/DynamicField.js"
      />
    </>
  );
};

export default DynamicFieldExample;
