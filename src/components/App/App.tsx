import React from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import Homepage from "../Homepage";
import Cart from "../Cart";
import Order from "../Order";

function App() {
  return (
    <Router>
      <Link to="/">Home</Link>
      <Link to="/cart">Cart</Link>
      <Link to="/order">Order</Link>
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
    </Router>
  );
}

export default App;
