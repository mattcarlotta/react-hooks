import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
import Examples from "../pages/Examples";
import NotFound from "../pages/NotFound";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/examples" component={Examples} />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
