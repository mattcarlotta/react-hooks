import styled from "styled-components";

const Headline = styled.h1`
  color: ${({ theme }) =>
    theme.name === "dark" ? theme.accent : theme.tertiary};
  margin: 20px 0;
`;

export default Headline;
