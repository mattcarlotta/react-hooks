export const contextExample = `import React, {
  createContext,
  useCallback,
  useContext,
  useState
} from "react";

// we're creating a React Context instance component called "Context"
const Context = createContext();

// we'll define a custom "Provider" component. notice that we'll also
// be exporting this "Provider" component in addition to
// the default export.
export const Provider = ({ children }) => {
  // we'll define a "theme" string and a "setTheme" function
  const [theme, setTheme] = useState("light");

  // we'll define a "toggleTheme" function to update the "theme".
  // please see "useCallback" hook explanation to understand
  // why I'd recommend this approach over inline functions
  const toggleTheme = useCallback(() => {
    setTheme(prevState => ({
      prevState === "light" ? "dark" : "light"
    }))
  }, []):

  // we're utilizing "Context.Provider" -- not to be confused with
  // this "Provider" component, it comes from React's "createContext"
  // function. we'll need to pass "theme" and the "toggleTheme"
  // function to this Context.Provider's "value" property
  return (
    <Context.Provider value={{ theme, toggleTheme }}>
      {children}
    </Context.Provider>
  );
};

// this default export is a "useContext" instance of the "Context"
// we've defined above. this simplifies the process by not having 
// to import "useContext" and our "Context" component over and over.
export default () => useContext(Context);
`;

export const providerExample = `import React from 'react';
import { render } from 'react-dom';
// we'll just import our "Provider" component
import { Provider } from "./Hooks/useProvider";
import ContextExample from "./components/ContextExample";

// and wrap our "ContextExample" with the "Provider"
const App = () => (
  <Provider>
    <ContextExample />
  </Provider>
);

render(<App />, document.getElementById("root"))
`;

export const useProviderExample = `import React from "react";
import useProvider from "../Hooks/useProvider";

const ContextExample = () => {
  const { theme, toggleTheme } = useProvider();

  return (
    <>
      <p>
        Current theme is: { theme }
      </p>
      <button type="button" onClick={toggleTheme}>
        Toggle Theme
      </button>
    </>
  );
};

export default ContextExample;
`;
