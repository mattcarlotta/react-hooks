import styled from "styled-components";
import DisplayData from "./DisplayData";

const StyledDisplayData = styled(DisplayData)`
  height: 100%;
  width: 100%;
  text-align: center;

  & .error-container {
    padding-top: 20%;
    color: #f56342;
  }

  & .image {
    height: 150px;
    width: 150px;
    margin-left: auto;
    margin-right: auto;
  }

  & .album {
    margin-bottom: 20px;
  }

  & .title {
    margin-bottom: 10px;
    font-size: 18px;
  }

  & .url {
    margin-bottom: 10px;
    font-size: 18px;
  }
`;

export default StyledDisplayData;
