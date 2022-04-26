import React from "react";
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;
    console.log(cart);
    let count = 0;
    let price = 0;

    for(const iteam of cart){
        count = count + iteam.quantity;
        price = price + iteam.quantity * iteam.price;
    }
    const tax = .2 * price;
    const total = price + tax;
  return (
    <div className="single-cart">
        <h1>Invoice</h1>
        <hr />
      <h6>Total Product: {count} pic</h6>
      <p>Price: {price}</p>
      <p>Tax: {tax.toFixed(2)}</p>
      <hr />
      <h6>Total:(<small>including vat/tax</small>) {total}</h6>

        {props.children}
    </div>
  );
};

export default Cart;
