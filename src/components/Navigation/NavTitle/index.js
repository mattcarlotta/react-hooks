import styled from "styled-components";

const NavTitle = styled.div`
  @media (max-width: 576px) {
    display: block;
    width: 100%;
    margin-bottom: 20px;
  }

  color: #03a9f3;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
`;

export default NavTitle;
