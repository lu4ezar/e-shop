import React, { useEffect } from "react";
import Content from "../Content";
import Header from "../Header/Header";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../../redux/catalogSlice";
import "./App.scss";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <div className="App">
      <Header />
      <Content />
    </div>
  );
}

export default App;
