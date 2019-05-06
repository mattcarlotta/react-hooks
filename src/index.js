import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./components/Themeing";
import Routes from "./routes";
import reducers from "./reducers";
import "rc-tooltip/assets/bootstrap_white.css";

const store = createStore(reducers);

const App = () => (
  <BrowserRouter>
    <Provider store={store}>
      <ThemeProvider>
        <Routes />
      </ThemeProvider>
    </Provider>
  </BrowserRouter>
);

render(<App />, document.getElementById("root"));
