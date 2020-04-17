import React from "react";
import "./Pager.scss";
import { selectPage, getTotalPages } from "../../redux/selectors";
import { useSelector, useDispatch } from "react-redux";
import { ReactComponent as LeftArrow } from "../../img/left_arrow.svg";
import { ReactComponent as RightArrow } from "../../img/right_arrow.svg";
import { pageSlice } from "../../redux/pageSlice";

const Pager = () => {
  const page = useSelector(selectPage);
  const incDisabled = useSelector(getTotalPages) === page;
  const dispatch = useDispatch();
  const { incrementPage, decrementPage } = pageSlice.actions;
  return (
    <div className="Pager">
      <button
        className="arrow_btn"
        onClick={() => dispatch(decrementPage())}
        disabled={page === 1}
      >
        <LeftArrow />
      </button>
      <div className="page_number">{page}</div>
      <button
        className="arrow_btn"
        onClick={() => dispatch(incrementPage())}
        disabled={incDisabled}
      >
        <RightArrow />
      </button>
    </div>
  );
};

export default Pager;
