import React from "react";
import { useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";
import useProduct from "../../hooks/useProduct";
import { addToDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shope.css";

const Shope = () => {
  const [products] = useProduct();
  // local stroge added
  const [cart, setCart] = useCart(products);

  //click handeler for add to cart
  const addToCart = (item) => {
    let newCart = [];
    const exist = cart.find((p) => p.id === item.id);
    if (!exist) {
      item.quantity = 1;
      newCart = [...cart, item];
    } else {
      const rest = cart.filter((p) => p.id !== item.id);
      exist.quantity = exist.quantity + 1;
      newCart = [...rest, exist];
    }
    setCart(newCart);
    addToDb(item.id);
  };
  const navigated = useNavigate();
  const navigates = () => {
    navigated("/order");
  };
  //click handelr for get one
  return (
    <div className="container-fluid mx-auto row gx-2">
      <div className="row col-md-9">
        {products.map((pro) => (
          <Product key={pro.id} product={pro} addToCart={addToCart}></Product>
        ))}
      </div>
      <div className="col-md-3 order-part">
        {
          <Cart cart={cart}>
            <button onClick={navigates}>Order Sumary</button>
          </Cart>
        }
      </div>
    </div>
  );
};

export default Shope;
