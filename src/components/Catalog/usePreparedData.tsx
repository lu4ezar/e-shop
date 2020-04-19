import { useState, useEffect } from "react";
import { selectCategories } from "../../redux/selectors";
import { useSelector } from "react-redux";
import { Category } from "../../interfaces";

export const usePreparedData = (data: any) => {
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
  const [preparedData, setPreparedData] = useState([] as Category[]);
  const catalog = useSelector(selectCategories);
  useEffect(() => {
    setPreparedData(prepareData(catalog));
  }, [catalog]);
  return preparedData;
};
