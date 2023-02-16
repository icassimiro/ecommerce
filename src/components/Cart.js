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

  return (
    <div className="divcart">
      <div className="buycart">
        <ShoppingCart className="carticon" />{" "}
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
                  <button className="remove" onClick={() => removeItem(e)}>
                    <BsFillCartDashFill />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
