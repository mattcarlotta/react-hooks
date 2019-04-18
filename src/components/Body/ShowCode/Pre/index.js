import styled from "styled-components";

const Pre = styled.pre`
  background-color: ${props => props.theme.alt};
  border: 1px dashed #e9e9e9;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  height: 400px;
  width: 100%;
  max-width: 800px;
  overflow-y: auto;
  margin-top: 0;
`;

export default Pre;
