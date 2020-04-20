import React, { useReducer, SyntheticEvent, FormEvent } from "react";
import HeadingText from "../shared/HeadingText";
import { useSelector, useDispatch } from "react-redux";
import { getTotalPrice } from "../../redux/selectors";
import "./Order.scss";
import { Link } from "react-router-dom";
import { FormState, FormReducer } from "../../interfaces";
import { cartSlice } from "../../redux/cartSlice";

const initialState: FormState = {
  name: "",
  phone: "",
  email: "",
  address: "",
  date: "",
  time: "",
  showMessage: "hide",
};

const reducer = (state: FormState, { field, value, type }: FormReducer) => {
  if (type === "reset") {
    return initialState;
  }
  return {
    ...state,
    [field as string]: value,
  };
};

const Order = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { name, phone, email, address, date, time, showMessage } = state;
  const onChange = (e: SyntheticEvent) => {
    const { name, value } = e.currentTarget as HTMLInputElement;
    dispatch({ field: name, value });
  };

  const reduxDispatch = useDispatch();
  const { dropCart } = cartSlice.actions;

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    dispatch({ field: "showMessage", value: "show" });
    reduxDispatch(dropCart());
    setTimeout(function () {
      window.location.hash = process.env.PUBLIC_URL + "/";
    }, 2000);
  }

  const sum = useSelector(getTotalPrice);
  return (
    <div className="Order">
      <HeadingText pxSize={32}>Order</HeadingText>
      {showMessage === "hide" ? (
        <>
          <div>${sum}</div>
          <form>
            <label className="flex_item">
              <span>Your name</span>
              <input
                name="name"
                type="text"
                value={name}
                placeholder="name"
                onChange={onChange}
              />
            </label>
            <label className="flex_item">
              <span>Phone number</span>
              <input
                name="phone"
                type="tel"
                value={phone}
                placeholder="phone"
                onChange={onChange}
              />
            </label>
            <label className="flex_item">
              <span>Email</span>
              <input
                name="email"
                type="email"
                value={email}
                placeholder="email"
                onChange={onChange}
              />
            </label>
            <label className="flex_item">
              <span>Delivery address</span>
              <input
                name="address"
                type="text"
                value={address}
                placeholder="address"
                onChange={onChange}
              />
            </label>
            <label className="flex_item">
              <span>Delivery date</span>
              <input
                name="date"
                type="date"
                value={date}
                placeholder="date"
                onChange={onChange}
              />
            </label>
            <label className="flex_item">
              <span>Delivery time</span>
              <input name="time" type="time" value={time} onChange={onChange} />
            </label>
            <label className="flex_item">
              <Link to="/">
                <button onClick={handleSubmit}>Submit</button>
              </Link>
            </label>
          </form>
        </>
      ) : (
        <div className="message">
          Your order for ${sum} was successully submitted
        </div>
      )}
    </div>
  );
};

export default Order;
