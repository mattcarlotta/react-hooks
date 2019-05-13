import styled from "styled-components";

const Column = styled.div`
  @media (max-width: 576px) {
    margin-top: ${({ mt }) => (mt ? "175px" : "0")};
  }

  @media (max-width: 992px) {
    max-width: ${({ lg }) => lg || "100%"};
    flex: ${({ lg }) => `0 0 ${lg || "100%"}`};
  }

  -ms-flex-preferred-size: 0;
  flex-basis: 0;
  -ms-flex-positive: 1;
  flex-grow: 1;
  max-width: ${({ width }) => width || "100%"};
  flex: ${({ width }) => `0 0 ${width || "100%"}`};
  align-self: ${({ align }) => align || "auto"};
  position: relative;
`;

export default Column;
