import styled from "styled-components";

const FlexContainer = styled.div`
  background-color: ${({ theme }) =>
    theme.name === "dark" ? "#e8e3e3" : "#efefef"};
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  padding: 5px 30px;
  width: 100%;
  max-width: 800px;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  min-height: 80px;

  &:after {
    display: block;
    clear: both;
    content: "";
  }
`;

export default FlexContainer;
