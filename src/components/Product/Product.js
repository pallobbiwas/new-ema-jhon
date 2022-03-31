import React from "react";
import "./Product.css";

const Product = ({ product, addToCart }) => {
  const { name, category, seller, price, img } = product;
  return (
    <div className="col-md-4 text-center">
      <div className="catr">
        <h4 title={name}>
          {name.length > 12 ? name.slice(0, 12) + "..." : name}
        </h4>
        <img className="w-75 img-fluid" src={img} alt="product" />
        <h4>price: {price}</h4>
        <p>catagory : {category}</p>
        <p>sellar: {seller}</p>
        <button onClick={() => addToCart(product)} className="crt-btn">Add to cart</button>
      </div>
    </div>
  );
};

export default Product;
