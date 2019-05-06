import styled, { css } from "styled-components";

const WindowContainer = styled.div`
  left: 50%;
  display: flex;
  transform: translateX(-50%);
  z-index: 1400;
  display: flex;
  position: fixed;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: center;
  justify-content: center;
  transition: 0.3s;

  ${props =>
    props.state &&
    ((props.state === "entering" &&
      css`
        bottom: -50px;
        opacity: 0.01;
      `) ||
      (props.state === "entered" &&
        css`
          bottom: 10px;
          opacity: 1;
        `) ||
      (props.state === "exiting" &&
        css`
          bottom: -200px;
          transition: 0.9s;
          opacity: 0.01;
        `) ||
      (props.state === "exited" &&
        css`
          opacity: 0;
        `))}
`;

export default WindowContainer;
