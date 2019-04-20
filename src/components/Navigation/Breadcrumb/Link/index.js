import styled from "styled-components";
import LinkComponent from "./Link";

const StyledLink = styled(LinkComponent)`
  color: ${({ theme }) => theme.alt};
  text-decoration: none;
  text-transform: capitalize;
  font-weight: bold;
  transition: all 0.2s ease-in-out;
  border-radius: 4px;

  &:hover {
    color: ${({ theme }) => theme.altHover};
  }
`;

export default StyledLink;
