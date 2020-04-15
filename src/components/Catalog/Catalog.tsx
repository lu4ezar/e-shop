import React from "react";
import "./Catalog.scss";
import { selectCatalog } from "../../redux/selectors";
import { useSelector } from "react-redux";

const Catalog = () => {
  const catalog = useSelector(selectCatalog);

  return <div className="Catalog">CATALOG</div>;
};

export default Catalog;
