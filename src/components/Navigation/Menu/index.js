import React from "react";
import { FaCodeBranch, FaCode, FaSitemap } from "react-icons/fa";
import Container from "./Container";
import MenuContainer from "./MenuContainer";
import SubMenu from "./SubMenu";
import MenuItem from "./MenuItem";
import { indexItems, exampleHookItems, exampleMisc } from "./Tabs";
import { ShowMenuButton } from "../../Body";
import { useMenuButtonToggle, useTabHandler } from "../../Hooks";

const Menu = () => {
  const { displayMenu, hideMenu, showMenu } = useMenuButtonToggle();
  const props = useTabHandler("");

  return (
    <>
      <ShowMenuButton
        handleClick={showMenu ? hideMenu : displayMenu}
        showMenu={showMenu}
      />
      <Container showMenu={showMenu}>
        <MenuContainer>
          <SubMenu
            {...props}
            tab="Index"
            title={
              <span>
                <FaSitemap /> Index
              </span>
            }
          >
            {indexItems.map(({ name, link }) => (
              <MenuItem key={name} handleClick={hideMenu} to={link}>
                {name}
              </MenuItem>
            ))}
          </SubMenu>
          <SubMenu
            {...props}
            tab="Hooks"
            title={
              <span>
                <FaCodeBranch /> Hooks
              </span>
            }
          >
            {exampleHookItems.map(({ hash, name, link }) => (
              <MenuItem
                key={name}
                handleClick={hideMenu}
                to={`${link}#${hash}`}
              >
                {name}
              </MenuItem>
            ))}
          </SubMenu>
          <SubMenu
            {...props}
            tab="Examples"
            title={
              <span>
                <FaCode /> Examples
              </span>
            }
          >
            {exampleMisc.map(({ hash, name, link }) => (
              <MenuItem
                key={name}
                handleClick={hideMenu}
                to={`${link}#${hash}`}
              >
                {name}
              </MenuItem>
            ))}
          </SubMenu>
        </MenuContainer>
      </Container>
    </>
  );
};

export default Menu;
