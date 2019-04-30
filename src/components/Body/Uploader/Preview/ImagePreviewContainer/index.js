import styled from "styled-components";

const ImagePreviewContainer = styled.div`
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  width: 85%;
  height: 80%;
  float: left;
  margin: 7px 10px 7px 37px;
  text-align: center;

  img {
    max-height: 240px;
    max-width: 100%;
    margin: 0 auto;
  }
`;

export default ImagePreviewContainer;
