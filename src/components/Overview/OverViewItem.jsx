import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cartSlice";
import "./OverViewItem.scss";

export const OverViewItem = (props) => {
  const [quantity, setQuantity] = useState(props.quantity);
  const recivedObject = {
    id: props.id,
    img: props.img,
    title: props.title,
    desc: props.desc,
    price: props.price,
  };

  const dispatch = useDispatch();
  const handleAdd = () => {
    dispatch(
      cartActions.addItems({
        id: recivedObject.id,
        img: recivedObject.img,
        title: recivedObject.title,
        desc: recivedObject.desc,
        price: recivedObject.price,
      })
    );
  };

  const handleRemove = () => {
    if (props.quantity > 0) {
      dispatch(cartActions.removeItems(recivedObject));
    } else {
      return;
    }
  };

  const cartItemssss = useSelector((state) => state.cart.items);
  const chosenItem = cartItemssss.filter((elm) => elm.id === recivedObject.id);
  useEffect(() => {
    if (chosenItem.length > 0) {
      setQuantity(chosenItem[0].quantity);
    } else {
      setQuantity(0);
    }
  }, [chosenItem]);

  return (
    <div className="OverViewItem">
      <div className="conatainer">
        <div className="left">
          <img src={props.img} alt="" />
        </div>
        <div className="center">
          <h4>
            PRODUCT: <span>{props.title}</span>
          </h4>
          <p>
            DESCREPTION: <span>{props.desc}</span>
          </p>
        </div>
        <div className="right">
          <h4>
            QUANTITY:
            {/* <span>{props.quantity}</span> */}
          </h4>
          <div className="quantityChange">
            <div className="quantity">
              <button onClick={handleRemove}>-</button>
              <span>{quantity}</span>
              <button onClick={handleAdd}>+</button>
            </div>
          </div>

          <h5>PRICE: {props.price} $</h5>
        </div>
      </div>
    </div>
  );
};
