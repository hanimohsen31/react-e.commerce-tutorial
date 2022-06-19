import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cartSlice";
import { Button } from "../Button/Button";
import "./ProductView.scss";

export const ProductView = () => {
  const [quantity, setQuantity] = useState(0);
  const location = useLocation();
  const recivedObject = {
    id: location.state.id,
    img: location.state.img,
    title: location.state.title,
    desc: location.state.desc,
    price: location.state.price,
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
    if (quantity > 0) {
      dispatch(cartActions.removeItems(recivedObject));
    } else {
      return;
    }
  };

  const history = useHistory();
  const handleGoBack = (event) => {
    event.preventDefault();
    history.goBack();
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

  const handleShowCart = (e) => {
    e.preventDefault();
    history.push("/overview");
  };
  return (
    <div className="ProductView">
      <div className="container">
        <div className="left">
          <img src={recivedObject.img} alt="" />
        </div>
        <div className="right">
          <h3>{recivedObject.title}</h3>
          <p>{recivedObject.desc}</p>
          <h6>
            $ <span>{recivedObject.price}</span>
          </h6>
          <div className="color">
            <div className="left">
              <p>Color</p>
              <span className="blue"></span>
              <span className="black"></span>
              <span className="lightblue"></span>
            </div>
            <div className="right">
              <h6>Size</h6>
              <select name="Size" id="size" defaultValue="m">
                <option value="m">M</option>
                <option value="lg">Lg</option>
                <option value="xlg">XLg</option>
              </select>
            </div>
          </div>
          <div className="quantityChange">
            <div className="quantity">
              <button onClick={handleRemove}>-</button>
              <span>{quantity}</span>
              <button onClick={handleAdd}>+</button>
            </div>
            <Button
              text="SHOW CART"
              padding="10px"
              fontSize="30px"
              marginTop="15px"
              onClick={handleShowCart}
            />
          </div>
          <Button
            text="BACK"
            padding="10px 20px"
            fontSize="25px"
            marginTop="25px"
            onClick={handleGoBack}
          />
        </div>
      </div>
    </div>
  );
};
