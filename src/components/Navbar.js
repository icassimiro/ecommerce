import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import { useContext } from "react";
import { CartContext } from "./ShoppingCartContext";
import logo from "../images/logo.png";

export const Navbar = () => {
  const [cart, setCart] = useContext(CartContext);
  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);
  return (
    <div className="navbar">
      <Link to={"/"} className="store">
        STORE
      </Link>
      <div className="divimg">
        {" "}
        <img className="img" src={logo} alt="logoimg" />
      </div>

      <div className="links">
        <Link className="link" to="/cart">
          {" "}
          Shop{" "}
        </Link>

        <Link to="/cart">
          <ShoppingCart className="shopcart" />
          <span className="number">{quantity}</span>
        </Link>
      </div>
    </div>
  );
};
