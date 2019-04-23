import styled from "styled-components";

const InlineBlockContainer = styled.div`
  width: ${({ width }) => width || "100%"};
  display: inline-block;
`;

export default InlineBlockContainer;
