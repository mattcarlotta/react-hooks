import React from "react";
import { Route, Switch } from "react-router-dom";
import Helmet from "react-helmet";

import Home from "../pages/Home";
import Examples from "../pages/Examples";
import HooksAPI from "../pages/HooksAPI";
import NotFound from "../pages/NotFound";

const config = {
  htmlAttributes: { lang: "en" },
  title: "",
  titleTemplate: "React Hooks - %s",
  meta: [
    {
      name: "React Hooks",
      content: "The best app in the world."
    }
  ]
};

const Routes = () => (
  <>
    <Helmet {...config} />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/hooks" component={HooksAPI} />
      <Route path="/examples" component={Examples} />
      <Route component={NotFound} />
    </Switch>
  </>
);

export default Routes;
