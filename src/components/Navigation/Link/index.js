import styled from "styled-components";
import LinkComponent from "./LinkComponent";

const handleStyleAttr = (color, theme, prop) => {
  switch (color) {
    case "primary":
      return theme.button.primary[prop];
    case "danger":
      return theme.button.secondary[prop];
    default:
      return theme.button.default[prop];
  }
};

const StyledLink = styled(LinkComponent)`
  color: ${({ color, theme }) => handleStyleAttr(color, theme, "color")};
  background-color: ${({ color, theme }) =>
    handleStyleAttr(color, theme, "bg")};
  white-space: nowrap;
  text-decoration: none;
  font-weight: bold;
  margin-right: 20px;
  padding: 8px 16px;
  transition: all 0.2s ease-in-out;
  border-radius: 4px;
  border: 1px solid
    ${({ color, theme }) => handleStyleAttr(color, theme, "border")};

  &:hover {
    color: ${({ color, theme }) => handleStyleAttr(color, theme, "colorHover")};
    background-color: ${({ color, theme }) =>
      handleStyleAttr(color, theme, "bgHover")};
    border: 1px solid
      ${({ color, theme }) => handleStyleAttr(color, theme, "borderHover")};
  }
`;

export default StyledLink;
