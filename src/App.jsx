import { Home } from "./pages/HomePage";
import { ProductsPage } from "./pages/ProductsPage";
import { ProductItemPage } from "./pages/ProductItemPage";
import { Switch, Route } from "react-router-dom";
import { OverviewPage } from "./pages/OverviewPage";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "./store/cartSlice";
import { environment } from "./store/environment";

function App() {
  // to get data from store
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  //---------------------------------------------------------------------------
  if (
    localStorage.getItem("userId") === "" ||
    localStorage.getItem("userId") === null ||
    localStorage.getItem("userId") === undefined
  ) {
    localStorage.setItem(
      "userId",
      Math.random().toFixed(15) * 1000000000000000
    );
  }
  let userId = localStorage.getItem("userId");
  //---------------------------------------------------------------------------
  useEffect(() => {
    // GET :: calling data from firebase
    const GetDataFromFireBase = async () => {
      const response = await fetch(
        `${environment.baseUrl}/cart/${userId}.json`
      );
      if (!response.ok) {
        console.log("ERROR 1");
      }
      const data = await response.json();
      dispatch(
        cartActions.replaceCart({
          items: data?.items || [],
          totalQuantity: data.totalQuantity || 0,
          OverAllPrice: data.OverAllPrice || 0,
        })
      );
      return data;
    };
    GetDataFromFireBase();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //---------------------------------------------------------------------------
  useEffect(() => {
    const sendCartData = async () => {
      // start of sendCartData function
      const response = await fetch(
        `${environment.baseUrl}/cart/${userId}.json`,
        { method: "PUT", body: JSON.stringify(cart) }
      );
      if (!response.ok) {
        throw new Error("this error from sending - line37 app file");
      }
    };
    // calling sendCartData()
    sendCartData().catch((error) => {
      console.log("ERROR 3");
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart]);
  //---------------------------------------------------------------------------
  return (
    <>
      <Switch>
        <Route path="/products">
          <ProductsPage />
        </Route>

        <Route path="/productview">
          <ProductItemPage />
        </Route>

        <Route path="/overview">
          <OverviewPage />
        </Route>

        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default App;
