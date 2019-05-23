export const useLayoutEffectExample = `import React, {
  Fragment,
  createContext,
  useCallback,
  useContext
  useEffect,
  useLayoutEffect,
  useState
} from 'react';
import { render } from "react-dom";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

// defining a custom "useAuthenticated" hook that utilizes
// "Context" for storing an "isAuthenticated" boolean.
const Context = createContext();
const Provider = ({ children }) => {
  const [isAuthenticated, setAuthentication] = useState(false);

  const login = useCallback(() => {
    setAuthentication(true);
  }, []);

  const logout = useCallback(() => {
    setAuthentication(false);
  }, []);

  return (
    <Context.Provider
      value={{
        isAuthenticated,
        login,
        logout
      }}
    >
      {children}
    </Context.Provider>
  );
};

const useAuthenticationHandler = () => useContext(Context);

const SuperSecretSauce = () => {
  // utilizing a ref to manipulate the DOM
  const secretsauceRef = useRef();
  // retrieving an "isAuthenticated" boolean from our
  // "useAuthenticationHandler" hook
  const { isAuthenticated } = useAuthenticationHandler();

  useEffect(() => {
    if (!isAuthenticated) {
      secretsauceRef.current.classList.add("hide");
    }
  }, [secretsauceRef, isAuthenticated]);

 return (
    <p ref={secretsauceRef}>
      Super secret sauce contains 50% sea and 50% weed or 100% seaweed.
    </p>
  );
};

const SuperSecretDrink = () => {
  // utilizing a ref to manipulate the DOM
  const secretdrinkRef = useRef();
  // retrieving an "isAuthenticated" boolean from our
  // "useAuthenticationHandler" hook
  const { isAuthenticated } = useAuthenticationHandler();

  useLayoutEffect(() => {
    if (!isAuthenticated) {
      secretdrinkRef.current.classList.add("hide");
    }
  }, [secretdrinkRef, isAuthenticated]);

 return (
    <p ref={secretdrinkRef}>
      Super secret drink contains 99% alcohol and 1% kale.
    </p>
  );
}

// landing page for our mini application
const Home = () => {
  const {
    isAuthenticated,
    login,
    logout
  } = useAuthenticationHandler();

  return (
    <div>
      {!isAuthenticated ? (
        <Fragment>
          <h1>You must login before continuing!</h1>
          <Button onClick={login}>Login</Button>
          <p>(before logging in, click the links below)</p>
        </Fragment>
      ) : (
        <Fragment>
          <h1>Welcome!</h1>
          <Button onClick={logout}>Logout</Button>
        </Fragment>
      )}
      <br />
      <Link to="/useeffect">View Super Secret Sauce</Link>
      <br />
      <Link to="/uselayouteffect">iew Super Secret Drink</Link>
    </div>
  );
};


const App = () => (
  <BrowserRouter>
    <Provider>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/secretsauce"
          component={SuperSecretSauce}
        />
        <Route
          exact
          path="/secretdrink"
          component={SuperSecretDrink}
        />
      </Switch>
    </Provider>
  </BrowserRouter>
);

render(<App />, document.getElementById("root"));
`;
