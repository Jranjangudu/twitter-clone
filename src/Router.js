import React, { useEffect, useState } from "react";
import Login from "./Auth/Login";
import LandingPage from "./LandingPage";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
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
  const history = useHistory();
  const [state, setstate] = useState(true);
  useEffect(() => {
    const fetchToken = () => {
      if (IsLoggedin) {
        fetch("http://localhost:5000/api/verifyuser", {
          headers: {
            authorization: `bearer ${IsLoggedin}`,
          },
        })
          .then((res) => {
            return res.json();
          })
          .then((isTrue) => {
            if (isTrue === false) setstate(isTrue);
          });
      }
    };
    fetchToken();
  }, []);
  if (!IsLoggedin) {
    localStorage.setItem("auth", "");
    history.push("/login");
  }
  if (state === false) {
    history.push("/login");
  }
  return (
    <Switch>
      {!IsLoggedin && (
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
      )}
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
      <Route path="/home" exact component={LandingPageComponent} />
      <Route path="/login" exact component={LoginPageComponent} />
      <Route path="/signup" exact component={ResistorPageComponent} />
      <Route path="/explore/:pathID" exact component={LandingPageComponent} />
      <Route
        path="/notifications/:pathID"
        exact
        component={LandingPageComponent}
      />
      <Route path="/bookmarks/:pathID" exact component={LandingPageComponent} />
      <Route path="/profile/:pathID" exact component={LandingPageComponent} />
    </Switch>
  );
};

export default Router;
