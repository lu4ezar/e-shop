import React, { SyntheticEvent, ReactNode } from "react";
import "./Catalog.scss";
import { selectCategories, selectFilterCatalog } from "../../redux/selectors";
import { useSelector, useDispatch } from "react-redux";
import { Category, FilterCatalog } from "../../interfaces";
import { filterCatalogSlice } from "../../redux/filterCatalogSlice";

/*
  [category1, category2, category3] => [category1, category2.category3]
*/
const prepareData = (data: Category[]) => {
  const findSubs = (el: Category): Category => {
    const sub = data.find((sub) => {
      return el.subcategory ? sub.name === el.subcategory : false;
    }) as Category;
    if (sub.subcategory) {
      return { ...el, subcategory: findSubs(sub) };
    }
    return { ...el, subcategory: { ...sub } };
  };

  return data.reduce((acc: Category[], cat: Category) => {
    const hasParentNode = data.find(
      (el: Category) => el.subcategory && el.subcategory === cat.name
    );
    if (hasParentNode) return [...acc];
    if (!cat.subcategory) {
      return [...acc, { ...cat }];
    }
    const catWithSubcategories = findSubs(cat);
    return [...acc, { ...catWithSubcategories }];
  }, []);
};

const Catalog = () => {
  const dispatch = useDispatch();
  const active = useSelector(selectFilterCatalog);
  const { setFilter } = filterCatalogSlice.actions;
  const handleClick = (e: SyntheticEvent) => {
    const { value } = e.currentTarget as HTMLButtonElement;
    dispatch(setFilter(value as FilterCatalog));
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
  const catalog = useSelector(selectCategories);
  const preparedData = prepareData(catalog);
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
