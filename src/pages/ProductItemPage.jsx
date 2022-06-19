import React from "react";
import { Announcement } from "../components/Announcement/Announcement";
import { Navbar } from "../components/Navbar/Navbar";
import { Navbar2 } from "../components/Navbar2/Navbar2";
import { Footer } from "../components/Footer/Footer";
import { ProductView } from "../components/ProductView/ProductView";
// import { Newsletter } from "../components/Newsletter/Newsletter";

export const ProductItemPage = (props) => {
  return (
    <div className="ProductItemPage">
      <Announcement />
      <Navbar />
      <Navbar2 />
      <ProductView />
      {/* <Newsletter /> */}
      <Footer />
    </div>
  );
};
