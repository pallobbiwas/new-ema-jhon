import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import logo from "../../images/Logo.svg";
import CoustomLink from "../CoustomLink/CoustomLink";

const Header = () => {
  const [user] = useAuthState(auth);
  console.log(user);
  return (
    <nav className="bg-dark py-4">
      <div className=" d-flex container align-items-center justify-content-between">
        <div>
          <img src={logo} alt="" />
        </div>
        <div className="d-flex fs-3">
          <CoustomLink className="text-white" to="/">
            Shope
          </CoustomLink>
          <CoustomLink className="text-white mx-4" to="/order">
            Order
          </CoustomLink>
          <CoustomLink className="text-white" to="/inventory">
            Inventory
          </CoustomLink>
          {user?.uid ? <p className="text-white mx-2 bg-info rounded-3 px-3"><small>{user.email.slice(0,12)}</small></p> : ""}
          {user ? (
            <button onClick={() => signOut(auth)}>logOut</button>
          ) : (
            <CoustomLink className="text-white ms-4" to="/login">
              Login
            </CoustomLink>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
