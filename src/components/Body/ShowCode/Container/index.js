import styled from "styled-components";

const Container = styled.div`
  background-color: ${({ theme }) =>
    theme.name === "dark" ? "#e8e3e3" : "#efefef"};
  padding: 5px 30px;
  width: 100%;
  max-width: 800px;
  transition: height 350ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export default Container;
