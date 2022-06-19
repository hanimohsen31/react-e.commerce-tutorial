import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { OverViewItem } from "./OverViewItem";
import { Button } from "../Button/Button";
import { cartActions } from "../../store/cartSlice";
import './Overview.scss'


export const Overview = () => {
  // to get data from store
  const cartItemssss = useSelector((state) => state.cart.items);
  const OverAllPrice = useSelector((state) => state.cart.OverAllPrice);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();

  const handleClear = () => {
    dispatch(
      cartActions.replaceCart({
        items: [],
        totalQuantity: 0,
        OverAllPrice: 0,
      })
    );
  };

  return (
    <>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItemssss.map((elm) => (
          <OverViewItem
            key={elm.id}
            id={elm.id}
            desc={elm.desc}
            title={elm.title}
            quantity={elm.quantity}
            total={elm.totalPrice}
            price={elm.price}
            img={elm.img}
          />
        ))}
      </ul>
      <h3>Over All Price: {OverAllPrice} $ </h3>
      {totalQuantity > 0 && <div className="button">
            <Button
              text="CLEAR CART"
              padding="5px"
              fontSize="25px"
              marginTop="10px"
              onClick={handleClear}
            />
          </div>}
    </>
  );
};
