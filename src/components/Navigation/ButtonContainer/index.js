import styled from "styled-components";

const ButtonContainer = styled.div`
  @media (max-width: 725px) {
    position: fixed;
    top: ${({ top }) => top};
    right: ${({ right }) => right};
    left: ${({ left }) => left};
  }
  display: inline-block;
`;

export default ButtonContainer;
