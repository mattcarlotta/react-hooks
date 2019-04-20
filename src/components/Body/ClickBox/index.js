import styled from "styled-components";

const ClickBox = styled.div`
  cursor: ${({ cursor }) => cursor || "default"};
  color: ${({ theme }) => theme.base};
  height: 50px;
  width: 500px;
  text-align: center;
  padding-top: 15px;
  border: 1px dotted #03a9f3;
  border-radius: 5px;
`;

export default ClickBox;
