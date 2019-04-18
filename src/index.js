import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./components/Themeing";
import Routes from "./routes";
import "rc-tooltip/assets/bootstrap_white.css";

const App = () => (
  <BrowserRouter>
    <ThemeProvider>
      <Routes />
    </ThemeProvider>
  </BrowserRouter>
);

render(<App />, document.getElementById("root"));
