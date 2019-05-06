import styled from "styled-components";

const WindowContainer = styled.div`
  left: 50%;
  right: auto;
  transform: translateX(-50%);
  bottom: 10px;
  z-index: 1400;
  display: flex;
  position: fixed;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: center;
  justify-content: center;
`;

export default WindowContainer;
