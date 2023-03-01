import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";

import logo from "../images/logo.png";

export const Navbar = () => {
  return (
    <div className="navbar">
      <Link to={"/"} className="store">
        STORE
      </Link>
      <div className="divimg">
        {" "}
        <img className="imglogo" src={logo} alt="logoimg" />
      </div>

      <div className="links">
        <Link className="link" to="/cart">
          {" "}
          Shop{" "}
        </Link>

        <Link to="/cart">
          <ShoppingCart className="shopcart" />
          <span className="number"></span>
        </Link>
      </div>
    </div>
  );
};
