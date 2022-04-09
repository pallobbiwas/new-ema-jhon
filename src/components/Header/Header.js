import React from "react";
import logo from "../../images/Logo.svg";
import CoustomLink from "../CoustomLink/CoustomLink";

const Header = () => {
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
          <CoustomLink className="text-white ms-4" to="/login">
            Login
          </CoustomLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;
