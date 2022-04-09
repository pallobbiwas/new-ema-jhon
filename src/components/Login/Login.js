import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import "./Login.css";

const Login = () => {
  const [signInWithEmailAndPassword, user, error] =
    useSignInWithEmailAndPassword(auth);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const emailBlur = (e) => {
    setEmail(e.target.value);
  };
  const passBlur = (e) => {
    setPass(e.target.value);
  };
  //location
  const location = useLocation();
  const form = location?.state?.form?.pathname || '/'
  const fromSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, pass);
  };
  if (user) {
    navigate(form, {replace: true});
  }

  return (
    <div className="from-container">
      <div>
        <h3 className="text-center">LogIn</h3>
        <form onSubmit={fromSubmit} action="">
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

            <label htmlFor="password">Password</label>
            <input
              onBlur={passBlur}
              className="rounded-3"
              type="password"
              name="password"
              id=""
              placeholder="password"
              required
            />
            <p className="text-danger">{error?.message}</p>
          </div>
          <button className="login-btn">Login</button>
        </form>
        <p className="text-end">
          <small>
            new to ema jhon ? <Link to="/signup">create-account</Link>
          </small>
        </p>
      </div>
    </div>
  );
};

export default Login;
