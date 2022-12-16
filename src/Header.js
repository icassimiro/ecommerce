import logo from "./images/logo.png";
import { BsCart } from "react-icons/bs";
import React, { useState } from "react";
import { searchTitle } from "./api";

const Header = () => {
  const [title, setTitle] = useState("dito");

  const [search, setSearch] = useState();

  const onChangeText = (e) => {
    setSearch(e.target.value);
  };
  const onClickButton = () => {
    onSearchTiTle(search);
  };

  const onSearchTiTle = async (title) => {
    const result = await searchTitle(title);
    setTitle(result);
  };

  return (
    <div className="Header">
      <img className="logo" src={logo} alt="logo" />
      <div className="divheader">
        <input
          className="headerinput"
          type="text"
          placeholder="PESQUISAR AQUI"
          onChange={onChangeText}
        />{" "}
        {search}
        <button className="headerbtn" onClick={onClickButton}>
          BUSCAR
        </button>
        <div>
          {title ? (
            <div>
              <div>titulo:{title.title}</div>
              <div>preco:{title.amount}</div>
            </div>
          ) : null}
        </div>
      </div>
      <div className="buy">
        <h4>COMPRAS</h4>
        <BsCart className="bs" />
      </div>
    </div>
  );
};

export default Header;
