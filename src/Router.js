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
const ResistorPageComponent = withPageTitle({
  component: Resistor,
  title: "Resistor -  twitter clone",
});
const LandingPageComponent = withPageTitle({
  component: LandingPage,
  title: "Home -  twitter clone",
});

const Router = () => {
  let token = window.localStorage.getItem("authorization");
  console.log(token);
  return (
    <BrowserRouter>
      <Switch>
        {token === "false" ? (
          <Route path="/" exact component={LoginPageComponent} />
        ) : (
          <Route path="/" exact component={LandingPageComponent} />
        )}

        <Route path="/login" exact component={LoginPageComponent} />
        <Route path="/signup" exact component={ResistorPageComponent} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
