import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

//import { Home, Login } from "./components";
import { Home, About, Events, Reviews, Login } from "./components";

export const Routes = () => (
  <Switch>
    <Route exact path="/">
      <Redirect to="/login" />
    </Route>
    <Route exact path="/home">
      <Home />
    </Route>
    <Route exact path="/about">
      <About />
    </Route>
    <Route exact path="/events">
      <Events />
    </Route>
    <Route exact path="/reviews">
      <Reviews />
    </Route>
    <Route exact path="/login">
      <Login />
    </Route>
  </Switch>
);
