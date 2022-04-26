import React from "react";
import { useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";
import useProduct from "../../hooks/useProduct";
import { removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import OrderProduct from "../OrderProduct/OrderProduct";

const Order = () => {
  const [producs] = useProduct();
  const [cart, setCart] = useCart();

  const navigate = useNavigate();
  const cheekout = () => {
    navigate("/shiping");
  };

  //remove item

  const removeItem = (item) => {
    const newItem = cart.filter((c) => c !== item);
    setCart(newItem);
    removeFromDb(item._id)
  };

  return (
    <div className="container row  mx-auto">
      <div className="col-md-8">
        {cart.map((p) => (
          <OrderProduct
            key={p._id}
            product={p}
            removeItem={removeItem}
          ></OrderProduct>
        ))}
      </div>
      <div className="col -md-4 mt-4">
        <Cart cart={cart}>
          <button onClick={cheekout}>proced shiping</button>
        </Cart>
      </div>
    </div>
  );
};

export default Order;
