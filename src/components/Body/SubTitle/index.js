import styled from "styled-components";

const SubTitle = styled.h2`
  margin-top: 40px;
  transition: all 0.2s ease-in-out;
  letter-spacing: 1px;
  color: ${({ theme }) =>
    theme.name === "dark" ? theme.accent : theme.tertiary};

  &:hover {
    a {
      opacity: 1;
    }
  }
`;

export default SubTitle;
