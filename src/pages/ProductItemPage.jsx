import React from "react";
import { Announcement } from "../components/Announcement/Announcement";
import { Navbar } from "../components/Navbar/Navbar";
import { Footer } from "../components/Footer/Footer";
import { ProductView } from "../components/ProductView/ProductView";

export const ProductItemPage = (props) => {
  return (
    <div className="ProductItemPage">
      <Announcement />
      <Navbar />
      <ProductView />
      <Footer />
    </div>
  );
};
