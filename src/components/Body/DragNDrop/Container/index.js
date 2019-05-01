import styled from "styled-components";

const Container = styled.div`
  @media (min-width: 768px) {
    max-width: 720px;
  }

  @media (min-width: 576px) {
    max-width: 540px;
  }

  min-height: 300px;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 10px;
`;

export default Container;
