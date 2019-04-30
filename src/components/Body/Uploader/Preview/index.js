import React from "react";
import PropTypes from "prop-types";
import Details from "./Details";
import ImagePreviewContainer from "./ImagePreviewContainer";
import PreviewContainer from "../PreviewContainer";

const Preview = ({ imageFile }) =>
  imageFile.map(({ name, preview, size }) => (
    <PreviewContainer key={name}>
      <ImagePreviewContainer>
        <img src={preview} alt={name} />
      </ImagePreviewContainer>
      <Details>
        {name} - {(size / 1024000).toFixed(2)}MB
      </Details>
    </PreviewContainer>
  ));

Preview.propTypes = {
  imageFile: PropTypes.arrayOf(
    PropTypes.shape({
      file: PropTypes.file,
      name: PropTypes.string,
      preview: PropTypes.string,
      size: PropTypes.number
    })
  )
};

export default Preview;
