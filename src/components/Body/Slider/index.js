import styled from "styled-components";
import Slider from "./Slider";

const thumb = () => `
  height: 14px;
  width: 14px;
  border-radius: 50%;
  background-color: #fff;
  border: 2px solid #1890ff;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -6px;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  z-index: 1000;
`;

const focusThumb = () => `
  box-shadow: 0 0 0 5px rgba(24, 144, 255, 0.2);
`;

const track = () => `
  cursor: pointer;
  width: 100%;
  height: 4px;
  background-color: #d6d4d4;
  border-radius: 2px;
  -webkit-transition: background-color 0.3s;
  transition: background-color 0.3s;
`;

const hoverTrack = () => `
  background: #d6d4d4;
`;

const StyledSlider = styled(Slider)`
  @media (min-width: 1px) {
    width: 200px;
  }

  @media (min-width: 568px) {
    width: 300px;
  }

  @media (min-width: 900px) {
    width: 400px;
  }

  margin: 0 20px;
  position: relative;

  sub {
    color: black;
    font-size: 15px;
    margin: 0 5px;
  }

  input {
    -webkit-appearance: none;
    width: 100%;

    &:focus {
      outline: none;
    }

    /* chrome */
    &::-webkit-slider-runnable-track {
      ${track()};
    }

    &:hover::-webkit-slider-runnable-track {
      ${hoverTrack()};
    }

    &::-webkit-slider-thumb {
      ${thumb()};
    }

    &:focus::-webkit-slider-thumb {
      ${focusThumb()};
    }
    /* ------ */

    /* mozilla */
    &::-moz-range-track {
      ${track()};
    }

    &:hover::-moz-range-track {
      ${hoverTrack()};
    }

    &::-moz-range-thumb {
      ${thumb()};
    }

    &:focus::-moz-range-thumb {
      ${focusThumb()};
    }
    /* ------ */

    /* Internet Explorer */
    &::-ms-track {
      ${track()};
    }

    &:hover::-ms-track {
      ${hoverTrack()};
    }

    &::-ms-thumb {
      ${thumb()};
    }

    &:focus::-ms-thumb {
      ${focusThumb()};
    }
    /* ------ */
  }

  & .units {
    position: absolute;
    top: 20px;
    left: 0;
    width: 100%;
    font-size: 14px;
  }

  & .start,
  & .middle,
  & .end {
    transform: translateX(-50%);
    position: absolute;
    display: inline-block;
    color: rgba(0, 0, 0, 0.45);
    text-align: center;
    word-break: keep-all;
  }

  & .start {
    left: 0%;
    color: rgba(0, 0, 255, 0.57);
  }

  & .middle {
    left: 50%;
    top: 10px;
    color: rgba(0, 0, 0, 0.57);
  }

  & .end {
    left: 100%;
    color: rgba(255, 0, 0, 0.57);
  }
`;

export default StyledSlider;
