import styled from "styled-components";

const StyledCrumb = styled.span`
  color: ${({ isActive, theme }) => (isActive ? theme.accent : theme.alt)};
`;

export default StyledCrumb;
