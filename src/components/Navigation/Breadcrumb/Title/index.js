import styled from "styled-components";

const Title = styled.h2`
  text-transform: capitalize;
  color: ${({ theme }) =>
    theme.name === "dark" ? theme.accent : theme.tertiary};
`;

export default Title;
