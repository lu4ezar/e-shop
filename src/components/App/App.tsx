import React, { useEffect } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "../Homepage";
import Cart from "../Cart";
import Order from "../Order";
import Header from "../Header/Header";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../../redux/catalogSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
    return () => {
      dispatch(fetchProducts());
    };
  });
  return (
    <Router>
      <Header />
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
