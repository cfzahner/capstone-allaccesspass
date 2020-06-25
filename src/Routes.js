import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import {
  Home,
  About,
  Events,
  Reviews,
  Login,
  ChoicePage,
  WomanForm,
  CompanyForm,
  Ladies,
  Companies,
  ThankYou,
} from "./components";

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
    <Route exact path="/profile">
      <ChoicePage />
    </Route>
    <Route exact path="/createF-Profile">
      <WomanForm />
    </Route>
    <Route exact path="/createC-Profile">
      <CompanyForm />
    </Route>
    <Route exact path="/ladies">
      <Ladies />
    </Route>
    <Route exact path="/companies">
      <Companies />
    </Route>
    <Route exact path="/thankyou">
      <ThankYou />
    </Route>
  </Switch>
);
