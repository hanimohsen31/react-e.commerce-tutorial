import React, { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { orderActions } from "../../store/orderSlice";
import "./Filter.scss";

export const Filter = () => {
  const colorRef = useRef();
  const sizeRef = useRef();
  const sortRef = useRef();
  const order = useSelector((state) => state.order.order);

  // to get data from store
  let dispatch = useDispatch();

  const handleChange = () => {
    dispatch(orderActions.changeOrder(sortRef.current.value));
  };

  useEffect(() => {
    sortRef.current.value = order;
  }, [order]);

  return (
    <div className="Filter">
      <div className="container-fluid">
        <h1>PRODUCTS </h1>
        <div className="filter">
          <div className="left">
            <h3>Products Filter: </h3>
            <div className="option1">
              <select
                name="Color"
                defaultValue="Color"
                id="color"
                ref={colorRef}
              >
                <option value="" disabled>
                  Color
                </option>
                <option value="white">White</option>
                <option value="black">Black</option>
                <option value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="green">Green</option>
              </select>
            </div>
            <div className="option2">
              <select defaultValue="m" name="Size" id="size" ref={sizeRef}>
                <option value="m">M</option>
                <option value="lg">Lg</option>
                <option value="xlg">XLg</option>
              </select>
            </div>
          </div>
          <div className="right">
            <h3>Sort Products:</h3>
            <div className="sortOptions">
              <select
                name="sort"
                defaultValue="id"
                id="sort"
                ref={sortRef}
                onChange={handleChange}
              >
                <option value="id" disabled>
                  SORT
                </option>
                <option value="acc">Accending</option>
                <option value="des">Descending</option>
                <option value="priceAcc">Price (Acc) </option>
                <option value="priceDes">Price (Des) </option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
