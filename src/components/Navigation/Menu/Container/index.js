import styled from "styled-components";

const Container = styled.div`
  @media (max-width: 992px) {
    max-width: 100%;
    flex: 0 0 100%;
    display: ${({ showMenu }) => (showMenu ? "block" : "none")};
  }

  -ms-flex-preferred-size: 0;
  flex-basis: 0;
  -ms-flex-positive: 1;
  flex-grow: 1;
  max-width: 25%;
  flex: 25%;
  height: calc(100vh - 60px);
  position: fixed;
  top: 80px;
  right: 0px;
  z-index: 500;
  width: 100%;
  background: ${({ theme }) => (theme.name === "dark" ? "#1c2022" : "#f5f5f5")};
  align-self: ${({ align }) => align || "auto"};
`;

export default Container;
