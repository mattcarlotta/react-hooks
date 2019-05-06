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
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
    0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);

  ${({ state }) =>
    state &&
    ((state === "entering" &&
      css`
        bottom: -50px;
        opacity: 0.01;
      `) ||
      (state === "entered" &&
        css`
          bottom: 10px;
          opacity: 1;
        `) ||
      (state === "exiting" &&
        css`
          bottom: -200px;
          transition: 0.9s;
          opacity: 0.01;
        `) ||
      (state === "exited" &&
        css`
          opacity: 0;
        `))}
`;

export default WindowContainer;
