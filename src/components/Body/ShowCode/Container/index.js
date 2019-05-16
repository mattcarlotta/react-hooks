import styled, { css } from "styled-components";

const Container = styled.div`
  background-color: ${({ theme }) =>
    theme.name === "dark" ? "#e8e3e3" : "#efefef"};
  padding: 5px 30px;
  width: 100%;
  max-width: 800px;
  transition: height 350ms cubic-bezier(0.4, 0, 0.2, 1);

  ${({ state }) =>
    state &&
    ((state === "entering" &&
      css`
        min-height: 0px;
        height: 485px;
        transition-duration: 300ms;
      `) ||
      (state === "entered" &&
        css`
          min-height: 0px;
          height: 485px;
          transition-duration: 300ms;
        `) ||
      (state === "exiting" &&
        css`
          min-height: 0px;
          height: 0px;
          transition-duration: 300ms;
        `) ||
      (state === "exited" &&
        css`
          min-height: 0px;
          height: 0px;
          transition-duration: 300ms;
        `))}
`;

export default Container;
