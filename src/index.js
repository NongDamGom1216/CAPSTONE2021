import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss?v1.1.0";

import Index from "views/Index.js";
import Manual from "views/pages/Manual.js";
import Simulation from "views/pages/Simulation.js";


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact render={props => <Index {...props} />} />
      <Route
        path="/manual-page"
        exact
        render={props => <Manual {...props} />}
      />
      
      <Route
        path="/simul-page"
        exact
        render={props => <Simulation {...props} />}
      />
     
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
