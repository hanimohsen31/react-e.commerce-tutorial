import React, { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../store/cartSlice";

export default function Paypal18() {
  const paypal = useRef();
  const OverAllPrice = useSelector((state) => state.cart.OverAllPrice);
  const dispatch = useDispatch();
  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: "Over ALl Price",
                amount: {
                  currency_code: "USD",
                  value: OverAllPrice,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          console.log(order);
          alert("Thanks for your purchase");
          dispatch(
            cartActions.replaceCart({
              items: [],
              totalQuantity: 0,
              OverAllPrice: 0,
            })
          );
        },
        onError: (err) => {
          console.log(err);
          alert("Something Went Wrong");
        },
      })
      .render(paypal.current);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div ref={paypal}></div>
    </div>
  );
}
