import styled from "styled-components";

const AddField = styled.button`
  color: ${({ theme }) => theme.accent};
  font-size: 15px;
  background-color: #fff;
  border: 1px dashed #d9d9d9;
  text-align: center;
  height: 32px;
  width: 100%;
  margin-bottom: 20px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);

  &:hover {
    border: 1px dashed #03a9f3;
  }
`;

export default AddField;
