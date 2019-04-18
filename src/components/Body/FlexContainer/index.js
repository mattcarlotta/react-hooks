import styled from "styled-components";

const FlexContainer = styled.div`
  background-color: #e8e3e3;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  padding: 5px 30px;
  display: -ms-flexbox;
  width: 100%;
  max-width: 800px;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  height: 80px;

  &::after {
    display: block;
    clear: both;
    content: "";
  }
`;

export default FlexContainer;
