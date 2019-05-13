import styled from "styled-components";

const ClickBox = styled.div`
  @media (max-width: 576px) {
    margin-right: 10px;
  }

  @media (max-width: 768px) {
    width: 300px;
  }

  cursor: ${({ cursor }) => cursor || "default"};
  color: ${({ theme }) => theme.alt};
  background-color: #fff;
  height: 50px;
  width: 500px;
  text-align: center;
  padding-top: 15px;
  border: 1px dotted #03a9f3;
  border-radius: 5px;
`;

export default ClickBox;
