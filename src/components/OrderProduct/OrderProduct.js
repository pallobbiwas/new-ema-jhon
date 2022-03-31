import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import './OrderProduct.css';

const OrderProduct = ({ product, removeItem }) => {
  const { name, img, quantity, price } = product;
  return (
    <div className="flex-container mt-4">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="reviwe-iteam-container">
        <div className="iteam-details">
          <p title={name}>
            {name.length > 15 ? name.slice(0, 15) + "..." : name}
          </p>
          <p>Price: {price}$</p>
          <p>quantity: {quantity}</p>
        </div>
        <div className="delete-container">
          <button onClick={() => {removeItem(product)}} className="trash-btn"><FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon></button>
        </div>
      </div>
    </div>
  );
};

export default OrderProduct;
