import styled from "styled-components";

const Container = styled.div`
  @media (min-width: 1340px) {
    max-width: 1260px;
  }
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;
  padding: 0px 30px;
  margin-bottom: 80px;
  width: ${({ width }) => width || "100%"};
  margin-left: auto;
  margin-right: auto;
  margin-top: 100px;
`;

export default Container;
