import styled from "styled-components";

const Border = styled.div`
  border: 1px dotted #03a9f3;
  padding: 15px;
  background-color: ${({ isDraggingOver }) =>
    isDraggingOver ? "#ffebe6" : "#fff"};
`;

export default Border;
