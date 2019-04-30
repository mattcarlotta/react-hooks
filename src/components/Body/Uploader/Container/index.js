import styled from "styled-components";

const Container = styled.div`
  height: ${({ height }) => height || "335px"};
  width: 100%;
  margin-bottom: 20px;
`;

export default Container;
