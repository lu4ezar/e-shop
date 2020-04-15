import React from "react";
import { Switch, Route } from "react-router-dom";
import Cart from "../Cart";
import Order from "../Order";
import Homepage from "../Homepage";

const Router = () => (
  <Switch>
    <Route path="/cart">
      <Cart />
    </Route>
    <Route path="/order">
      <Order />
    </Route>
    <Route path="/">
      <Homepage />
    </Route>
  </Switch>
);

export default Router;
