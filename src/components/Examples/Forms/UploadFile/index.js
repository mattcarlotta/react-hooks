import React from "react";
import { MdCloudUpload } from "react-icons/md";
import {
  BlockContainer,
  Button,
  Column,
  Form,
  ResetButton,
  Row,
  ShowCode,
  ShowCodeButton,
  SubTitle,
  Uploader
} from "../../../Body";
import { useFileHandler, useToggle } from "../../../Hooks";

const styles = {
  addressTypeStyle: {
    margin: "20px 0",
    fontSize: "16px",
    padding: 0
  },
  containerStyle: {
    display: "block",
    marginBottom: "24px",
    width: "100%"
  },
  column2: {
    padding: "20px 0"
  },
  icon: {
    position: "relative",
    top: "3px",
    height: "20px",
    width: "20px"
  },
  label: {
    fontSize: "16px",
    position: "relative",
    top: "-10px",
    marginLeft: "5px"
  },
  reset: {
    marginLeft: "0px"
  },
  sameAsStyle: {
    padding: "0px",
    marginBottom: "20px"
  },
  showCodeButton: {
    float: "right"
  },
  submit: {
    float: "right"
  }
};

const UploadFileExample = () => {
  const { values, handleChange, resetValues } = useFileHandler({
    imageFile: []
  });

  const [showCode, toggleShowCode] = useToggle(false);

  const handleSubmit = e => {
    e.preventDefault();
    alert(JSON.stringify(values, null, 4));
  };

  return (
    <>
      <SubTitle>Upload Form</SubTitle>
      <BlockContainer>
        <Row>
          <Column width="75%">
            <Form onSubmit={handleSubmit}>
              <BlockContainer style={styles.sameAsStyle}>
                <Uploader
                  height="335px"
                  name="imageFile"
                  handleChange={handleChange}
                  imageFile={values.imageFile}
                />
              </BlockContainer>
              <ResetButton
                handleClick={resetValues}
                style={styles.reset}
                text="Reset"
              />
              <Button style={styles.submit} type="submit">
                <MdCloudUpload style={styles.icon} /> Upload
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
      <ShowCode showCode={showCode} fileName="Forms/UploadFile.js" />
    </>
  );
};

export default UploadFileExample;
