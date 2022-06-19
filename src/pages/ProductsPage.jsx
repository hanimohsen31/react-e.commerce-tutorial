import React from "react";
import { Announcement } from "../components/Announcement/Announcement";
import { Navbar } from "../components/Navbar/Navbar";
import { Newsletter } from "../components/Newsletter/Newsletter";
import { Products } from "../components/Products/Products";
import { Footer } from "../components/Footer/Footer";
import { Filter } from "../components/Filter/Filter";
import { Button } from "../components/Button/Button";
import { useHistory } from "react-router-dom";
export const ProductsPage = () => {
  const history = useHistory();
  const handleClick = (event) => {
    event.preventDefault();
    history.push({
      pathname: "/overview",})
}
  return (
    <div className="ProductsPage">
      <Announcement />
      <Navbar />
      <Filter />
      <Products />
      <div className="container text-center my-5">
      <Button
          text="CHECKOUT"
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
