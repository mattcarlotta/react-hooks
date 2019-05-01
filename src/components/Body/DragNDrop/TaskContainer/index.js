import styled from "styled-components";

const Border = styled.div`
  padding: 10px;
  background-color: ${({ isDraggingOver }) =>
    isDraggingOver ? "#ffebe6" : "#ebecf0"};
`;

export default Border;
