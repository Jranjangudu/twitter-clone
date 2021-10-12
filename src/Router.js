import React from "react";
import Login from "./Auth/Login";
import LandingPage from "./LandingPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Resistor from "./Auth/Resistor";
import withPageTitle from "./services/withPageTitle";

const LoginPageComponent = withPageTitle({
  component: Login,
  title: "Login -  twitter clone",
});

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/login" exact component={LoginPageComponent} />
        <Route path="/signup" exact component={Resistor} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
