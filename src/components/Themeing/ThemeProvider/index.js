import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../GlobalStyles";
import { Container } from "../../Body";
import { Header } from "../../Navigation";
import { Provider, useLocalStorage } from "../../Hooks";
import { Message } from "../../../containers";

export const lightTheme = {
  name: "light",
  bg: "#fcfcfc",
  base: "#fff",
  accent: "#03a9f3",
  hover: "#0f7ae5",
  secondary: "#0f7ae5",
  tertiary: "#282c34" /*1c2022 */,
  alt: "#03a9f3",
  altHover: "#0f7ae5",
  button: {
    primary: {
      color: "#eee",
      bg: "transparent",
      border: "#03a9f3",
      colorHover: "#fcfcfc",
      bgHover: "transparent",
      borderHover: "#fcfcfc"
    },
    secondary: {
      color: "#ffffff",
      bg: "#f56342",
      border: "#f56342",
      colorHover: "#ffffff",
      bgHover: "#be391c",
      borderHover: "transparent"
    },
    default: {
      color: "#03a9f3",
      bg: "transparent",
      border: "#03a9f3",
      colorHover: "#0f7ae5",
      bgHover: "transparent",
      borderHover: "#0f7ae5"
    }
  }
};

export const darkTheme = {
  name: "dark",
  bg: "#1c2022",
  base: "#353535",
  accent: "#03a9f3",
  hover: "#5a5a5a",
  secondary: "#4a4a4a",
  tertiary: "#fff",
  alt: "#888",
  altHover: "#eee",
  button: {
    primary: {
      color: "#a5a5a5",
      bg: "transparent",
      border: "#a5a5a5",
      colorHover: "#e4e4e4",
      bgHover: "transparent",
      borderHover: "#e4e4e4"
    },
    secondary: {
      color: "#eee",
      bg: "#6441a4",
      border: "#6441a4",
      colorHover: "#eee",
      bgHover: "#7d5bbe",
      borderHover: "transparent"
    },
    default: {
      color: "#a5a5a5",
      bg: "transparent",
      border: "#a5a5a5",
      colorHover: "#e4e4e4",
      bgHover: "transparent",
      borderHover: "#e4e4e4"
    }
  }
};

const Theme = ({ children }) => {
  const [selectedTheme, setTheme] = useLocalStorage("theme", darkTheme);

  const toggleTheme = () => {
    setTheme(selectedTheme.name === "dark" ? lightTheme : darkTheme);
  };

  return (
    <ThemeProvider theme={selectedTheme}>
      <>
        <GlobalStyles />
        <Header onToggleTheme={toggleTheme} />
        <Container>
          <Provider>{children}</Provider>
        </Container>
        <Message />
      </>
    </ThemeProvider>
  );
};

Theme.propTypes = {
  children: PropTypes.node.isRequired
};

export default Theme;
