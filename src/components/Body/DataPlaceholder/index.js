import styled from "styled-components";
import Placeholder from "./Placeholder";

const DataPlaceholder = styled(Placeholder)`
  height: 100%;
  width: 100%;
  text-align: center;

  & div {
    margin-left: auto;
    margin-right: auto;
  }

  & .image {
    height: 150px;
    width: 150px;
    margin-bottom: 20px;
    animation: pulse 1.6s infinite;
  }

  & .album {
    height: 35px;
    width: 200px;
    margin-bottom: 20px;
    animation: pulse 1.4s infinite;
  }

  & .title {
    height: 32px;
    width: 100%;
    margin-bottom: 20px;
    animation: pulse 1.2s infinite;
  }

  & .url {
    height: 32px;
    width: 100%;
    animation: pulse 1s infinite;
  }
`;

export default DataPlaceholder;
