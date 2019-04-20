import styled from "styled-components";

const Title = styled.h2`
  text-transform: capitalize;
  color: ${({ theme }) => theme.accent};
`;

export default Title;
