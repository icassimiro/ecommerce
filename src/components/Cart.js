import React, { useState } from "react";
import { getItem, setItem } from "./LocalStorage";
import { BsFillCartDashFill } from "react-icons/bs";
import { ShoppingCart } from "phosphor-react";

export const Cart = () => {
  const [data, setData] = useState(getItem("carrinho") || []);

  const removeItem = (obj) => {
    const arrFilter = data.filter((e) => e.id !== obj.id);
    setData(arrFilter);
    setItem("carrinho", arrFilter);
  };

  const subTotal = data.reduce((acc, cur) => acc + cur.price, 0);

  return (
    <div className="divcart">
      <div className="buycart">
        <ShoppingCart className="carticon" />{" "}
      </div>
      <div className="subtotal">
        <h1> {`PREÇO TOTAL: ${subTotal} BRL`}</h1>
      </div>
      <div className="divbtncart">
        <button className="btncart">FINALIZAR COMPRA</button>
      </div>

      {data.map((e) => (
        <div key={e.id} className="allresults">
          <div className="searchresults">
            <div className="results">{e.title}</div>
            <div className="images">
              <img className="img" src={e.thumbnail} alt="images" />
            </div>
            <div className="prices">
              <div className="price">
                {e.price} - {e.currency_id}
                <div>
                  {" "}
                  <div className="removediv">
                    <button className="remove" onClick={() => removeItem(e)}>
                      <BsFillCartDashFill />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
