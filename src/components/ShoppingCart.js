import React, { useContext } from "react";
import { CartContext } from "./ShoppingCartContext";

export const ShoppingCart = () => {
  const [cart, setCart] = useContext(CartContext);

  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  const totalPrice = cart.reduce((acc, curr) => {
    return acc + curr.quantity * curr.price;
  }, 0);

  return (
    <div className="divcart">
      <div className="buycart">ITEMS NO CARRINHO: {quantity}</div>

      <div className="pricecart">PREÇO TOTAL: {totalPrice}</div>
      <div className="divbtncart">
        <button className="btncart" onClick={() => console.log(cart)}>
          FINALIZAR COMPRA
        </button>
      </div>
    </div>
  );
};
