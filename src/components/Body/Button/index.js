import styled from "styled-components";
import StyledButton from "./Button";

const Button = styled(StyledButton)`
  color: ${props => props.theme.alt};
  background-color: ${props => props.theme.base};
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  padding: 8px 16px;
  transition: all 0.2s ease-in-out;
  border-radius: 4px;
  border: 1px solid;
  border-color: ${props =>
    props.theme.name === "light" ? props.theme.accent : "transparent"};

  &:hover {
    color: ${props => props.theme.altHover};
    background-color: ${props =>
      props.theme.name === "light" ? props.theme.base : props.theme.hover};
    border-color: ${props =>
      props.theme.name === "light" ? props.theme.hover : "transparent"};
  }

  &:focus {
    outline: none;
  }
`;

export default Button;
