import React, { createContext, useContext } from "react";
import PropTypes from "prop-types";
import { useEventHandler } from "../../Hooks";

const Context = createContext();

export const Provider = ({ children, initialValue }) => {
  const props = useEventHandler(initialValue || "");

  return (
    <Context.Provider
      value={{
        ...props
      }}
    >
      {children}
    </Context.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
  initialValue: PropTypes.string
};

export default () => useContext(Context);
