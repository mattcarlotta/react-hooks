import styled from "styled-components";

const DraggableProp = styled.span`
  text-transform: uppercase;
  font-size: 15px;
  background-color: ${({ isDragging }) => (isDragging ? "#0f7ae5" : "#03a9f3")};
  box-shadow: ${({ isDragging }) =>
    isDragging && "0px 10px 13px -7px #8433FF, 5px 5px 5px -2px #8433FF"};
  line-height: 32px;
  color: #fff;
  display: inline-block;
  padding: 0 15px;
  cursor: grab;
  border-radius: 5px;
  margin-bottom: 5px;
  width: 100%;
`;

export default DraggableProp;
