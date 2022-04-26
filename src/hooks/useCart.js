import { useEffect, useState } from "react";
import { getCart } from "../utilities/fakedb";

const useCart = () => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const shopingCart = getCart();
    const saveCart = [];
    const keys = Object.keys(shopingCart);
    console.log(keys);
    fetch("http://localhost:5000/products/keys",{
      method:'POST',
      headers:{
        'content-type': 'application/json'
      },
      body: JSON.stringify(keys)
    })
      .then((res) => res.json())
      .then((products) => {
        console.log(products);
        for (const id in shopingCart) {
          const addedProduct = products.find((p) => p._id === id);
          if (addedProduct) {
            const quantity = shopingCart[id];
            addedProduct.quantity = quantity;
            saveCart.push(addedProduct);
          }
        }
        setCart(saveCart);
      });
  }, []);
  return [cart, setCart];
};
export default useCart;
