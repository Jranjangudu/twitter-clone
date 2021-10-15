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

const IsLoggedin = localStorage.getItem("auth");

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" exact component={LoginPageComponent} />
        <Route path="/signup" exact component={ResistorPageComponent} />

        <Route path="/explore/:pathID" exact component={LandingPageComponent} />
        <Route
          path="/notifications/:pathID"
          exact
          component={LandingPageComponent}
        />
        <Route
          path="/bookmarks/:pathID"
          exact
          component={LandingPageComponent}
        />
        <Route path="/profile/:pathID" exact component={LandingPageComponent} />
        <Route
          path="/"
          exact
          render={() => (!IsLoggedin ? <Login /> : <LandingPageComponent />)}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
