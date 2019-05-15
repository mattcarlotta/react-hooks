import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../GlobalStyles";
import {
  Container,
  Column,
  MenuContainer,
  Row,
  ShowMenuButton
} from "../../Body";
import { Header, Menu } from "../../Navigation";
import { Provider, useLocalStorage } from "../../Hooks";
import { Message } from "../../../containers";
import { themes } from "../Themes";

const Theme = ({ children }) => {
  const [selectedTheme, setTheme] = useLocalStorage("theme", { name: "light" });
  const [showMenu, setMenu] = useState(false);

  const toggleTheme = useCallback(
    () => {
      setTheme(
        selectedTheme.name === "dark" ? { name: "light" } : { name: "dark" }
      );
    },
    [selectedTheme.name]
  );

  const displayMenu = useCallback(() => {
    setMenu(true);
  }, []);

  const hideMenu = useCallback(() => {
    setMenu(false);
  }, []);

  return (
    <ThemeProvider theme={themes[selectedTheme.name || "light"]}>
      <>
        <GlobalStyles />
        <Header onToggleTheme={toggleTheme} />
        <Container>
          <Row>
            <Column width="75%" mt>
              <Provider>{children}</Provider>
            </Column>
            <MenuContainer showMenu={showMenu}>
              <Menu hideMenu={hideMenu} />
            </MenuContainer>
            <ShowMenuButton
              handleClick={showMenu ? hideMenu : displayMenu}
              showMenu={showMenu}
            />
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
