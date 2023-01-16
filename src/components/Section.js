import { useContext, useState } from "react";
import { CartContext } from "../ShoppingCartContext";

import { searchTitle } from "./API";

export const Section = () => {
  const [itensPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(0);
  const [results, setResults] = useState([]);
  const [cart, setCart] = useContext(CartContext);

  const addToCart = () => {
    setCart((currItems) => {
      const FoundItems = currItems.find((item) => item.results === results);
      if (FoundItems) {
        return currItems.map((item) => {
          if (item.results === results) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      } else {
        return [...currItems, { results, quantity: 1 }];
      }
    });
  };
  const removeItem = (results) => {
    setCart((currItems) => {
      if ((currItems.find((item) => results.id) === results?.quantity) === 1) {
        return currItems.filter((item) => item.results !== results);
      } else {
        return currItems.map((item) => {
          if (item.results === results) {
            return { ...item, quantity: (item.quantity = 1) };
          } else {
            return item;
          }
        });
      }
    });
  };

  const getQuantity = (id) => {
    return cart.find((item) => item.results === results)?.quantity || 0;
  };
  const quantityItem = getQuantity(results);

  const [search, setSearch] = useState();
  const pages = Math.ceil(results.length / itensPerPage);
  const startIndex = currentPage * itensPerPage;
  const endIndex = startIndex + itensPerPage;
  const currentResults = results.slice(startIndex, endIndex);

  const onChangeHandler = (e) => {
    setSearch(e.target.value);
  };

  const onButtonClickHandler = () => {
    onSearchHandler(search);
  };

  const onSearchHandler = async (results) => {
    const result = await searchTitle(results);
    setResults(result.results);
    console.log("titulo", result);
  };

  return (
    <section className="a">
      <div className="alldiv">
        <div className="divsearch">
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
      </div>

      {currentResults &&
        currentResults.map((res) => (
          <div className="allresults">
            <div className="searchresults" key={res.id}>
              <div className="results">{res.title}</div>
              <div className="images">
                <img className="img" src={res.thumbnail} alt="images" />
              </div>
              <div className="prices">
                <div className="price">
                  {res.price} - {res.currency_id}
                </div>
              </div>
              <div className="buybtn">
                <button onClick={() => addToCart()} className="btn">
                  {quantityItem > 0 && (
                    <div className="quantity">{quantityItem}</div>
                  )}
                  COMPRAR
                </button>
              </div>
            </div>
          </div>
        ))}
      <div className="changepage">
        {Array.from(Array(pages), (results, index) => {
          return (
            <button
              style={index === currentPage ? { backgroundColor: "gray" } : null}
              className="pagebtn"
              value={index}
              onClick={(e) => setCurrentPage(Number(e.target.value))}
            >
              {index + 1}
            </button>
          );
        })}
      </div>
    </section>
  );
};
