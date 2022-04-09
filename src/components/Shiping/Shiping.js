import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Shiping = () => {
  //email pass feom hoocls/auth
const[user] = useAuthState(auth);

  //state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
//   const navigate = useNavigate()
  // onblur for input field
  const nameBlur = (e) => {
    setName(e.target.value);
  };
  const addressBlur = (e) => {
    setAddress(e.target.value);
  };
  const phoneBlur = (e) => {
    setPhone(e.target.value);
  };
  const emailBlur = (e) => {
    setEmail(e.target.value);
  };
  //form submit
  const formSubmit = (e) => {
    e.preventDefault();
    const shiping = {name, email, address, phone};
    console.log(shiping);
  };
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
            onBlur={emailBlur}
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
              onBlur={nameBlur}
              className="rounded-3 mb-3"
              type="text"
              name="name"
              id=""
              placeholder="name"
              required
            />

            <label htmlFor="address">Address</label>
            <input
              onBlur={addressBlur}
              className="rounded-3 mb-4"
              type="text"
              name="address"
              id=""
              placeholder="address"
              required
            />
            <label htmlFor="phone">phone</label>
            <input
              onBlur={phoneBlur}
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
