import styled from "styled-components";
import StyledButton from "./Button";

const Button = styled(StyledButton)`
  color: ${({ theme }) => theme.alt};
  background-color: ${({ theme }) => theme.base};
  white-space: nowrap;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  padding: 8px 16px;
  transition: all 0.2s ease-in-out;
  border-radius: 4px;
  border: 1px solid;
  border-color: ${({ theme }) =>
    theme.name === "light" ? theme.accent : "transparent"};

  &:hover {
    color: ${({ theme }) => theme.altHover};
    background-color: ${({ theme }) =>
      theme.name === "light" ? theme.base : theme.hover};
    border-color: ${({ theme }) =>
      theme.name === "light" ? theme.hover : "transparent"};
  }

  &:focus {
    outline: none;
  }
`;

export default Button;
