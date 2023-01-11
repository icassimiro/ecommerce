import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <Link className="link" to="/">
          {" "}
          Shop{" "}
        </Link>
        <Link to="/Cart">
          <ShoppingCart className="shopcart" />
        </Link>
      </div>
    </div>
  );
};
