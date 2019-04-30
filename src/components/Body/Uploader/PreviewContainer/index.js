import styled from "styled-components";
import PreviewContainer from "./PreviewContainer";

const StyledPreviewContainer = styled(PreviewContainer)`
  text-align: center;
  color: ${({ theme }) => theme.alt};
  background-color: #fff;
  height: ${({ height }) => height || "100%"};
  width: ${({ width }) => width || "100%"};
  border-radius: 5px;
  position: relative;
  border: 1px dashed ${({ theme }) => theme.accent};

  input[type="file"] {
    cursor: pointer;
    opacity: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
  }
`;

export default StyledPreviewContainer;
