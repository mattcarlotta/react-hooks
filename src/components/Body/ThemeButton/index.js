import styled from "styled-components";
import ThemeButton from "./ThemeButton";

const StyledThemeButton = styled(ThemeButton)`
  color: ${({ theme }) => theme.alt};
  background-color: ${({ theme }) =>
    theme.name === "light" ? theme.tertiary : theme.base};
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  padding: 8px 16px;
  transition: all 0.2s ease-in-out;
  margin-right: 20px;
  border-radius: 4px;
  border: 1px solid;
  border-color: ${({ theme }) =>
    theme.name === "light" ? theme.accent : "transparent"};

  a,
  button {
    height: 40px;
  }

  &:hover {
    color: ${({ theme }) => theme.altHover};
    background-color: ${({ theme }) =>
      theme.name === "light" ? "transparent" : theme.hover};
    border-color: ${({ theme }) =>
      theme.name === "light" ? theme.altHover : "transparent"};
  }

  &:focus {
    outline: none;
  }
`;

export default StyledThemeButton;
