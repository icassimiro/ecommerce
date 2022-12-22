import logo from "./images/logo.png";
import { BsCart } from "react-icons/bs";
import React, { useState } from "react";
import { searchTitle } from "./api";

const Header = () => {
  const [results, setResults] = useState();

  const [search, setSearch] = useState();

  const onChangeHandler = (e) => {
    setSearch(e.target.value);
  };

  const onButtonClickHandler = () => {
    onSearchHandler(search);
  };
  const cart = "🛒";

  const buyButtonClick = () => {
    console.log("COMPRADO");
  };

  const onSearchHandler = async (results) => {
    const result = await searchTitle(results);
    setResults(result.results);
    console.log("titulo", result);
  };

  return (
    <div className="Header">
      <img className="logo" src={logo} alt="logo" />
      <div className="divheader">
        <input
          className="headerinput"
          type="text"
          placeholder="PESQUISAR AQUI"
          onChange={onChangeHandler}
        />{" "}
        {search}
        <button className="headerbtn" onClick={onButtonClickHandler}>
          BUSCAR
        </button>
      </div>
      <div className="allresults">
        {results &&
          results.map((res) => (
            <div className="searchresults" key={res.id}>
              <p className="results">{res.title}</p>
              <img src={res.thumbnail} />
              <div className="btn">
                <button className="buybtn" onClick={buyButtonClick}>
                  COMPRAR{cart}
                </button>
              </div>
              <p className="results">
                {res.price}-{res.currency_id}
              </p>
            </div>
          ))}
      </div>

      <div className="buy">
        <h4>COMPRAS</h4>
        <BsCart className="bs" />
      </div>
    </div>
  );
};

export default Header;
