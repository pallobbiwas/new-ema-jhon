import React, { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import "./SignUp.css";

const SignUp = () => {
  //email pass feom hoocls/auth
  const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth)

  //state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate()
  // onblur for input field
  const nameBlur = (e) => {
    setName(e.target.value);
  };
  const emailBlur = (e) => {
    setEmail(e.target.value);
  };
  const passBlur = (e) => {
    setPass(e.target.value);
  };
  const confirmPassBlur = (e) => {
    setConfirmPass(e.target.value);
  };
  //form submit
  const formSubmit = (e) => {
    e.preventDefault();
    if (pass !== confirmPass) {
      setError("password didn't match");
      return;
    };
    if(pass.length < 6){
        setError('password contain more then 6 charector');
        return;
    }
    createUserWithEmailAndPassword(email, pass, name)
  };
  // take user and load navigated another route
  if(user){
    navigate('/login')
  }

  //return function
  return (
    <div className="from-container">
      <div>
        <h3 className="text-center">Signup</h3>
        <form onSubmit={formSubmit} action="">
          <div className="input-group py-4">
            <label htmlFor="email">Email</label>
            <input
              onBlur={emailBlur}
              className="rounded-3 mb-3"
              type="email"
              name="email"
              id=""
              placeholder="email"
              required
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

            <label htmlFor="password">Password</label>
            <input
              onBlur={passBlur}
              className="rounded-3 mb-4"
              type="password"
              name="password"
              id=""
              placeholder="password"
              required
            />
            <p className="text-danger">{error}</p>
            <label htmlFor="password">confirm-Password</label>
            <input
              onBlur={confirmPassBlur}
              className="rounded-3"
              type="password"
              name="password"
              id=""
              placeholder="confirm password"
              required
            />
          </div>
          <button className="login-btn">Sign up</button>
        </form>
        <p className="text-end">
          <small>
            Allready have accoutn ? <Link to="/login">Login</Link>
          </small>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
