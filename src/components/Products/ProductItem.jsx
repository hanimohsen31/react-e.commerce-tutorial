import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cartSlice";
import ZoomInOutlinedIcon from "@mui/icons-material/ZoomInOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import "./ProductItem.scss";

export const ProductItem = (props) => {
  const history = useHistory();

  const handleClick = (event) => {
    event.preventDefault();
    history.push({
      pathname: "/productview",
      state: {
        id: props.id,
        img: props.img,
        title: props.title,
        desc: props.desc,
        price: props.price,
      },
    });
  };

  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(
      cartActions.addItems({
        id: props.id,
        img: props.img,
        title: props.title,
        desc: props.desc,
        price: props.price,
      })
    );
  };

  return (
    <div className="ProductItem">
      <div className="col">
        <div className="card">
          <img src={props.img} className="card-img-top" alt="..." />
          <div className="card-body cardBody">
            <div className="buttons">
              <span>
                <ShoppingCartOutlinedIcon onClick={handleAddToCart} />
              </span>
              <span>
                <ZoomInOutlinedIcon onClick={handleClick} />
              </span>
              <span>
                <FavoriteBorderOutlinedIcon />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
