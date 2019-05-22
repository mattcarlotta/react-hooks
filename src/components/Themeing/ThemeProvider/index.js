import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../GlobalStyles";
import { Container, Column, Row, ScrollHandler } from "../../Body";
import { Header, Menu } from "../../Navigation";
import { Provider, useLocalStorage } from "../../Hooks";
import { Message } from "../../../containers";
import { themes } from "../Themes";

const Theme = ({ children }) => {
  const [selectedTheme, setTheme] = useLocalStorage("theme", { name: "light" });

  const toggleTheme = useCallback(
    () => {
      setTheme(
        selectedTheme.name === "dark" ? { name: "light" } : { name: "dark" }
      );
    },
    [selectedTheme.name]
  );

  return (
    <ThemeProvider theme={themes[selectedTheme.name || "light"]}>
      <>
        <GlobalStyles />
        <Header onToggleTheme={toggleTheme} />
        <Container>
          <Row>
            <Column width="75%" mt>
              <ScrollHandler>
                <Provider>{children}</Provider>
              </ScrollHandler>
            </Column>
            <Menu />
            <Message />
          </Row>
        </Container>
      </>
    </ThemeProvider>
  );
};

Theme.propTypes = {
  children: PropTypes.node.isRequired
};

export default Theme;
