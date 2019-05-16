import { useCallback, useState } from "react";
import PropTypes from "prop-types";

const useTabHandler = initialState => {
  const [menuTab, setTab] = useState(initialState);

  const openTab = useCallback(tab => {
    setTab(tab);
  }, []);

  const closeTabs = useCallback(
    () => {
      setTab(initialState);
    },
    [initialState]
  );

  return {
    closeTabs,
    menuTab,
    openTab
  };
};

useTabHandler.propTypes = {
  initialState: PropTypes.string
};

export default useTabHandler;
