import React from "react";
import { Switch, Route } from "react-router-dom";
import { Section } from "./Section";
import { Cart } from "./Cart";

export const Content = () => {
  return (
    <Switch>
      <Route exac path="/cart" component={Cart} />
      <Route exact path="/" component={Section} />
    </Switch>
  );
};
