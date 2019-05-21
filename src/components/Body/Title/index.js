import styled from "styled-components";

const Title = styled.h1`
  margin-top: 20px;
  margin-bottom: 0;
  letter-spacing: 1px;
  color: ${({ theme }) =>
    theme.name === "dark" ? theme.accent : theme.tertiary};

  &:hover {
    a {
      opacity: 1;
    }
  }
`;

export default Title;
