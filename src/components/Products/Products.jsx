import React from "react";
import { ProductItem } from "./ProductItem";
import { useEffect ,useState} from "react";
import { useSelector } from 'react-redux';
import "./Products.scss";

export const Products = () => {
  const [data, setData] = useState([]);
  const order = useSelector((state) => state.order.order);
  // const [order, setOrder] = useState(orderFromRedeux);

  useEffect(()=>{
    const GetDataFromFireBase = async () => {
    const response = await fetch(
      "https://reactcourse-babcb-default-rtdb.firebaseio.com/popularProducts.json"
    );
    if (!response.ok) {
      throw new Error("Error of My Own");
    }
    const data = await response.json();

    // let sorted;
    if (order === 'id'){setData(data)}
    if (order === 'acc'){setData(data.sort((a,b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0)))}
    if (order === 'des'){setData(data.sort((a,b) => (b.title > a.title) ? 1 : ((a.title > b.title) ? -1 : 0)))}
    if (order === 'priceAcc'){setData(data.sort((a,b) => (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0)))}
    if (order === 'priceDes'){setData(data.sort((a,b) => (b.price > a.price) ? 1 : ((a.price > b.price) ? -1 : 0)))}
    return data;
  };
  GetDataFromFireBase()
  },[order])
  
  return (
    <div className="Products container-fluid">
      <div className="productsContainer">
        {data.map((elm) => (
          <ProductItem key={elm.id} id={elm.id} img={elm.img} title={elm.title} price={elm.price} desc={elm.desc}/>
        ))}
      </div>
    </div>
  );
};
