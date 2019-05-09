import styled from "styled-components";

const Breadcrumbs = styled.ul`
  margin: 0;
  padding: 0;
  line-height: 1.5;
  list-style: none;
  font-size: 14px;
  border-bottom: 1px solid
    ${({ theme }) => (theme.name === "dark" ? "#403f3f" : "#ececec")};
`;

export default Breadcrumbs;
