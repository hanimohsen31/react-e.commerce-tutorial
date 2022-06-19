import React from "react";
import { Content } from "./Content";
import { sliderData } from "../../store/data/sliderData";
import ArrowDropDownCircleOutlinedIcon from "@mui/icons-material/ArrowDropDownCircleOutlined";
import "./Slider.scss";

export const Slider = () => {
  return (
    <div className="Slider">
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {sliderData.map((elm, indx) => (
            <div
              key={elm.id}
              className={indx === 0 ? "carousel-item active" : "carousel-item"}
            >
              <Content key={elm.id} img={elm.img} title={elm.title} desc={elm.desc} />
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span className="icon">
            <ArrowDropDownCircleOutlinedIcon fontSize="inherit" />
          </span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span className="icon">
            <ArrowDropDownCircleOutlinedIcon fontSize="inherit" />
          </span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};
