import React from "react";
import { Announcement } from "../components/Announcement/Announcement";
import { Navbar } from "../components/Navbar/Navbar";
import { Overview } from "../components/Overview/Overview";
import { useSelector } from "react-redux";
import Paypal18 from "../components/PayPal/PayPal";

export const OverviewPage = () => {
  const OverAllPrice = useSelector((state) => state.cart.OverAllPrice);

  return (
    <>
      <div className="OverviewPage">
        <Announcement />
        <Navbar />
        <div className="container my-5">
          <Overview />
          <div className="paypal container my-4 d-flex justify-content-start p-0">
            {OverAllPrice > 0 && <Paypal18 />}
          </div>
        </div>
      </div>
    </>
  );
};
