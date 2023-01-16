import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import { useContext } from "react";
import { CartContext } from "../ShoppingCartContext";

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
      <div className="links">
        <Link className="link" to="/">
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
