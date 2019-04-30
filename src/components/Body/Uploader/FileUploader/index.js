import React from "react";
import PropTypes from "prop-types";
import { MdCloudUpload } from "react-icons/md";
import PreviewContainer from "../PreviewContainer";

const FileUploader = ({ handleChange, name }) => (
  <PreviewContainer tabIndex="0">
    <input
      accept="image/jpeg, image/png, image/gif, image/bmp"
      type="file"
      tabIndex="-1"
      multiple={false}
      name={name}
      onChange={handleChange}
    />
    <MdCloudUpload style={{ height: 185, width: 185, paddingTop: 85 }} />
    <p>Click or drag image file to this area to upload.</p>
  </PreviewContainer>
);

FileUploader.propTypes = {
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
};

export default FileUploader;
