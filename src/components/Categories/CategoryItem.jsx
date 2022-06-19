import React from "react";
import { Link } from "react-router-dom";
import './CategoryItem.scss'

export const CategoryItem = (props) => {
  return (
    <div className="CategoryItem">
      <div className="col">
        <div className="card">
          <img src={props.img} className="card-img-top" alt="..." />
          <div className="card-body cardBody">
            <h5 className="card-title">{props.title}</h5>
            <button><Link to='/products'>SHOW NOW</Link></button>
          </div>
        </div>
      </div>
    </div>
  );
};
