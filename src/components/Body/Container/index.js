import styled from "styled-components";

const Container = styled.div`
  color: ${({ theme }) =>
    theme.name === "dark" ? theme.accent : theme.tertiary};
  padding: 0px 30px;
  margin-bottom: 80px;
`;

export default Container;
