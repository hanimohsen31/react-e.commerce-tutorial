import React from "react";
import { CategoryItem } from "./CategoryItem";
import { categories } from "../../store/data/data";
import "./Categories.scss";


export const Categories = () => {

  
  return (
    <div className="Categories container-fluid">
      <div calss="CategoryContainer">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {categories.map((elm) => (
            <CategoryItem key={elm.id} img={elm.img} title={elm.title} />
          ))}
        </div>
      </div>
    </div>
  );
};
