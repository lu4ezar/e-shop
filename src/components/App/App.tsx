import React, { useEffect } from "react";
import Content from "../Content";
import Header from "../Header/Header";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../../redux/catalogSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <Router>
      <Header />
      <Content />
  );
}

export default App;
