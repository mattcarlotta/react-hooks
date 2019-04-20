import React from "react";
import PropTypes from "prop-types";
import { Route, Switch } from "react-router-dom";
import { Breadcrumb } from "../../components/Navigation";
import Main from "./Main";
import Form from "./Form";
import FormElements from "./FormElements";
import NotFound from "../NotFound";

const Examples = ({ match: { url } }) => (
  <>
    <Breadcrumb />
    <Switch>
      <Route exact path={`${url}`} component={Main} />
      <Route exact path={`${url}/form`} component={Form} />
      <Route exact path={`${url}/form/elements`} component={FormElements} />
      <Route component={NotFound} />
    </Switch>
  </>
);

Examples.propTypes = {
  url: PropTypes.string
};

export default Examples;
