import React, { SyntheticEvent, ReactNode } from "react";
import "./Catalog.scss";
import { selectCategories, selectFilterCatalog } from "../../redux/selectors";
import { useSelector, useDispatch } from "react-redux";
import { Category, FilterCatalog } from "../../interfaces";
import { filterCatalogSlice } from "../../redux/filterCatalogSlice";
import { pageSlice } from "../../redux/pageSlice";
import { usePreparedData } from "./usePreparedData";

const Catalog = () => {
  const dispatch = useDispatch();
  const active = useSelector(selectFilterCatalog);
  const { setFilter } = filterCatalogSlice.actions;
  const { dropPage } = pageSlice.actions;
  const handleClick = (e: SyntheticEvent) => {
    const { value } = e.currentTarget as HTMLButtonElement;
    dispatch(setFilter(value as FilterCatalog));
    dispatch(dropPage());
  };
  const renderList = (data: Category[]) => {
    const renderPart = (el: Category): ReactNode => {
      if (!el.subcategory) {
        return (
          <button
            onClick={handleClick}
            value={el.name}
            className={el.name === active ? "active" : ""}
          >
            {el.name}
          </button>
        );
      }
      return (
        <>
          <button
            onClick={handleClick}
            value={el.name}
            className={el.name === active ? "active" : ""}
          >
            {el.name}
          </button>
          <ul className="sub">
            <li>{renderPart(el.subcategory as Category)}</li>
          </ul>
        </>
      );
    };
    return data.map((cat: Category) => {
      return <li key={cat.id}>{renderPart(cat)}</li>;
    });
  };

  const preparedData = usePreparedData();
  const list = renderList(preparedData);

  return (
    <ul className="Catalog">
      <li>
        <button
          onClick={handleClick}
          value="all"
          className={active === "all" ? "active" : ""}
        >
          All
        </button>
      </li>
      {list}
    </ul>
  );
};

export default Catalog;
