import styled from "styled-components";

const DraggableProp = styled.span`
  font-size: 13px;
  background-color: ${({ isDragging }) => (isDragging ? "#03a9f3" : "#fff")};
  box-shadow: ${({ isDragging }) =>
    isDragging && "0px 10px 13px -7px #8433FF, 5px 5px 5px -2px #8433FF"};
  color: ${({ isDragging }) => (isDragging ? "#fff" : "#000")};
  border: 1px solid #666;
  display: inline-block;
  padding: 10px;
  cursor: grab;
  border-radius: 3px;
  margin-bottom: 5px;
  width: 100%;
`;

export default DraggableProp;
