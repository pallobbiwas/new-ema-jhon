import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";
import { addToDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shope.css";

const Shope = () => {
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/products?page=${page}&size=${9}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [page]);

  useEffect(() => {
    fetch("http://localhost:5000/productsCount")
      .then((res) => res.json())
      .then((data) => {
        const count = data.count;
        const page = Math.ceil(count / 10);
        setPageCount(page);
      });
  }, []);
  console.log(pageCount);
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
    <div className="container-fluid mt-4 mx-auto">
      <div className=" mx-auto row gx-2">
        <div className="row col-md-9">
          {products.map((pro) => (
            <Product
              key={pro._id}
              product={pro}
              addToCart={addToCart}
            ></Product>
          ))}
          <hr className="my-4" />
          <div className=" text-center pb-3">
            {[...Array(pageCount).keys()].map((n) => (
              <button
                key={n}
                onClick={() => setPage(n)}
                className={
                  page === n
                    ? "bg-info text-white me-3 rounded px-3 py-2"
                    : "me-3 px-3 py-2 rounded"
                }
              >
                {n+1}
              </button>
            ))}
          </div>
        </div>
        <div className="col-md-3 order-part">
          {
            <Cart cart={cart}>
              <button onClick={navigates}>Order Sumary</button>
            </Cart>
          }
        </div>
      </div>
    </div>
  );
};

export default Shope;
