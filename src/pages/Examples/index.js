import React from "react";
import PropTypes from "prop-types";
import { Route, Switch } from "react-router-dom";
import { Breadcrumb } from "../../components/Navigation";
import Main from "./Main";
import Misc from "./Misc";
import EventListeners from "./EventListeners";
import Forms from "./Forms";
import FormElements from "./FormElements";
import NotFound from "../NotFound";

const Examples = ({ match: { url } }) => (
  <>
    <Breadcrumb />
    <Switch>
      <Route exact path={`${url}`} component={Main} />
      <Route exact path={`${url}/events`} component={EventListeners} />
      <Route exact path={`${url}/forms`} component={Forms} />
      <Route exact path={`${url}/forms/elements`} component={FormElements} />
      <Route exact path={`${url}/misc`} component={Misc} />
      <Route component={NotFound} />
    </Switch>
  </>
);

Examples.propTypes = {
  url: PropTypes.string
};

export default Examples;
