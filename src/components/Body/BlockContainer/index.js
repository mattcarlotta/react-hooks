import styled from "styled-components";

const BlockContainer = styled.div`
  background-color: #e8e3e3;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  padding: 5px 30px;
  width: 100%;
  max-width: 800px;
  display: block;

  &:after {
    content: "";
    clear: both;
    display: table;
  }
`;

export default BlockContainer;
