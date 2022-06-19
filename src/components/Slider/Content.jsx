import React from "react";
import { Link } from "react-router-dom";
import "./Content.scss";
export const Content = (props) => {
  return (
    <>
      <div className="content">
        <div className="left">
          <img src={props.img} alt="" />
        </div>
        <div className="right">
          <h2>{props.title}</h2>
          <h5>{props.desc}</h5>
          <button><Link to='/products'>SHOW NOW</Link></button>
        </div>
      </div>
    </>
  );
};
