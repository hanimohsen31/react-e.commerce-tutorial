import React from "react";
import { Announcement } from "../components/Announcement/Announcement";
import { Categories } from "../components/Categories/Categories";
import { Navbar } from "../components/Navbar/Navbar";
import { Navbar2 } from "../components/Navbar2/Navbar2";
import { Newsletter } from "../components/Newsletter/Newsletter";
import { Products } from "../components/Products/Products";
import { Slider } from "../components/Slider/Slider";
import { Footer } from "../components/Footer/Footer";
import { Button } from "../components/Button/Button";
import { useHistory } from "react-router-dom";


export const Home = () => {
  const history = useHistory();

    const handleClick = (event) => {
      event.preventDefault();
      history.push({
        pathname: "/products",})
  }
  return (
    <div className="Home">
      <Announcement />
      <Navbar />
      <Navbar2 />
      <Slider />
      <Categories />
      <Products />
      <div className="container text-center" style={{'marginTop' : '100px','marginBottom' : '100px'}}>
        <Button
          text="VIEW ALL PRODUCTS"
          marginTop="0"
          fontSize="25px"
          padding="5px"
          onClick={handleClick}
        />
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};
