import styled from "styled-components";

const StyledCrumb = styled.span`
  color: ${({ isActive, theme }) => (isActive ? theme.accent : theme.alt)};
  font-size: 16px;
`;

export default StyledCrumb;
