import styled from "styled-components";

const DropContainer = styled.div`
  position: absolute;
  width: 100%;
  z-index: 1000;
  top: 100%;
  background-color: hsl(0, 0%, 100%);
  border-radius: 4px;
  box-shadow: 0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1);
  /* margin: 8px 0; */
  box-sizing: border-box;
`;

export default DropContainer;
