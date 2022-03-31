import { useEffect, useState } from "react";
import { getCart } from "../utilities/fakedb";

const useCart = (products) => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const shopingCart = getCart();
    const saveCart = [];
    for (const id in shopingCart) {
      const addedProduct = products.find((p) => p.id === id);
      if (addedProduct) {
        const quantity = shopingCart[id];
        addedProduct.quantity = quantity;
        saveCart.push(addedProduct);
      }
    }
    setCart(saveCart);
  }, [products]);
  return [cart, setCart];
};
export default useCart;
