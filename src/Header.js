import logo from "./images/logo.png";
import { BsCart } from "react-icons/bs";

const Header = () => {
  return (
    <div className="Header">
      <img className="logo" src={logo} alt="logo" />

      <div className="buy">
        <h4>COMPRAS</h4>
        <BsCart className="bs" />
      </div>
    </div>
  );
};

export default Header;
