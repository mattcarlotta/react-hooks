import styled from "styled-components";
import ShowMenuButton from "./ShowMenuButton";

const StyledShowMenuButton = styled(ShowMenuButton)`
  @media (max-width: 992px) {
    display: block;
    z-index: 9999;
  }
  position: fixed;
  bottom: 20px;
  right: 40px;
  display: none;
`;

export default StyledShowMenuButton;
