import React, { useReducer, SyntheticEvent } from "react";
import HeadingText from "../shared/HeadingText";
import { useSelector } from "react-redux";
import { getTotalPrice } from "../../redux/selectors";
import "./Order.scss";
import { Link } from "react-router-dom";

const initialState: any = {
  name: "",
  phone: "",
  email: "",
  address: "",
  date: "",
  time: "",
};

type FormReducer = Partial<{
  field: string;
  value: string;
  type: string;
}>;

interface FormState {
  name: string;
  phone: string;
  email: string;
  address: string;
  date: string;
  time: string;
}

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
  const { name, phone, email, address, date, time } = state;
  const onChange = (e: SyntheticEvent) => {
    const { name, value } = e.currentTarget as HTMLInputElement;
    dispatch({ field: name, value });
  };

  function handleSubmit(e: any) {
    e.preventDefault();
    setTimeout(function () {
      console.log(1);
      window.location.href = "/";
    }, 2000);
  }

  const sum = useSelector(getTotalPrice);
  return (
    <div className="Order">
      <HeadingText pxSize={32}>Order</HeadingText>
      <div>{sum}</div>
      <form>
        <label>
          <span>Your name</span>
          <input
            name="name"
            type="text"
            value={name}
            placeholder="name"
            onChange={onChange}
          />
        </label>
        <label>
          <span>Phone number</span>
          <input
            name="phone"
            type="tel"
            value={phone}
            placeholder="phone"
            onChange={onChange}
          />
        </label>
        <label>
          <span>Email</span>
          <input
            name="email"
            type="email"
            value={email}
            placeholder="email"
            onChange={onChange}
          />
        </label>
        <label>
          <span>Delivery address</span>
          <input
            name="address"
            type="text"
            value={address}
            placeholder="address"
            onChange={onChange}
          />
        </label>
        <label>
          <span>Delivery date</span>
          <input
            name="date"
            type="date"
            value={date}
            placeholder="date"
            onChange={onChange}
          />
        </label>
        <label>
          <span>Delivery time</span>
          <input name="time" type="time" value={time} onChange={onChange} />
        </label>
        <label>
          <span>Done:</span>
          <button onClick={handleSubmit}>
            <Link to="/">Submit</Link>
          </button>
          {/* <input type="submit" value="Submit" /> */}
        </label>
      </form>
    </div>
  );
};

export default Order;
