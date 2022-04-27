import axios from "axios";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Shiping = () => {
  //email pass feom hoocls/auth
  const [user, loading] = useAuthState(auth);

  //state
  //form submit
  const formSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const name = e.target.name.value;
    const address = e.target.address.value;
    const phone = e.target.phone.value;
    const user = { email, name, address, phone };
    console.log(user);

    //axsios function
    axios
      .post("https://cryptic-lake-68819.herokuapp.com/order", user)
      .then((responce) => {
        console.log(responce.data);
      });
  };

  if (loading) {
    return <p>loaddin....!</p>;
  }
  // take user and load navigated another route

  //return function
  return (
    <div className="from-container">
      <div>
        <h3 className="text-center">Shipping info</h3>
        <hr />
        <form onSubmit={formSubmit} className="my-4" action="">
          <div className="input-group py-4">
            <label htmlFor="email">Email</label>
            <input
              value={user?.email}
              className="rounded-3 mb-3"
              type="email"
              name="email"
              id=""
              placeholder="email"
              readOnly
            />
            <label htmlFor="name">Name</label>
            <input
              className="rounded-3 mb-3"
              type="text"
              name="name"
              id=""
              placeholder="name"
              required
            />

            <label htmlFor="address">Address</label>
            <input
              className="rounded-3 mb-4"
              type="text"
              name="address"
              id=""
              placeholder="address"
              required
            />
            <label htmlFor="phone">phone</label>
            <input
              className="rounded-3"
              type="text"
              name="phone"
              id=""
              placeholder="phone"
              required
            />
          </div>
          <button className="submit w-100">submit</button>
        </form>
      </div>
    </div>
  );
};

export default Shiping;
