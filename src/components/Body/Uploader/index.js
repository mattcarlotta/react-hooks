import React from "react";
import PropTypes from "prop-types";
import Preview from "./Preview";
import FileUploader from "./FileUploader";
import Container from "./Container";

const Uploader = ({ imageFile, height, ...rest }) => (
  <Container height={height}>
    {imageFile && imageFile.length > 0 ? (
      <Preview imageFile={imageFile} />
    ) : (
      <FileUploader {...rest} />
    )}
  </Container>
);

Uploader.propTypes = {
  height: PropTypes.string,
  imageFile: PropTypes.arrayOf(
    PropTypes.shape({
      file: PropTypes.file,
      name: PropTypes.string,
      preview: PropTypes.string,
      size: PropTypes.number
    })
  )
};

export default Uploader;
