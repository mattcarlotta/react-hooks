import { useState, useCallback } from "react";

const useMenuButtonToggle = () => {
  const [showMenu, setMenu] = useState(false);

  const displayMenu = useCallback(() => {
    setMenu(true);
  }, []);

  const hideMenu = useCallback(() => {
    setMenu(false);
  }, []);

  return {
    displayMenu,
    hideMenu,
    showMenu
  };
};

export default useMenuButtonToggle;
