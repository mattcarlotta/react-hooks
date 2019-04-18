import styled from "styled-components";

const NavBar = styled.nav`
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  padding: 20px;
  background-color: ${props => props.theme.secondary};
  -webkit-box-shadow: 0 0.25rem 0.125rem 0 rgba(0, 0, 0, 0.05);
  box-shadow: 0 0.25rem 0.125rem 0 rgba(0, 0, 0, 0.05);

  &::after {
    display: block;
    clear: both;
    content: "";
  }
`;

export default NavBar;
