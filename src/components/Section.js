import { useEffect, useState } from "react";
import { getItem, setItem } from "./LocalStorage";
import { BsFillCartCheckFill, BsFillCartPlusFill } from "react-icons/bs";
import { searchBar } from "./API";

export const Section = () => {
  const [cart, setCart] = useState(getItem("carrinho") || []);
  const [search, setSearch] = useState();
  const [data, setData] = useState([]);
  const [itensPerPage, setItensPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(0);
  const pages = Math.ceil(data.length / itensPerPage);
  const startIndex = currentPage * itensPerPage;
  const endIndex = startIndex + itensPerPage;
  const currentItems = data.slice(startIndex, endIndex);

  useEffect(() => {
    const fetchApi = async (results, limit = 50, offset = 0) => {
      const url = `https://api.mercadolibre.com/sites/MLB/search?q=${results}&limit=${limit}&offset=${offset}`;
      const response = await fetch(url);
      const objJson = await response.json();
      setData(objJson.results);
    };
    fetchApi();
  }, []);

  const handleClick = (obj) => {
    const element = cart.find((e) => e.id === obj.id);
    if (element) {
      const arrFilter = cart.filter((e) => e.id !== obj.id);
      setCart(arrFilter);
      setItem("carrinho", arrFilter);
    } else {
      setCart([...cart, obj]);
      setItem("carrinho", [...cart, obj]);
    }
  };

  const onChangeHandler = (e) => {
    setSearch(e.target.value);
  };
  const onButtonClick = () => {
    onSearchHandler(search);
  };
  const onSearchHandler = async (data) => {
    const result = await searchBar(data);
    setData(result.results);
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
            spellCheck="false"
          />{" "}
          {search}
          <button onClick={onButtonClick} className="headerbtn">
            BUSCAR
          </button>
        </div>
      </div>
      {currentItems.map((item) => (
        <div key={item.id} className="allresults">
          <div className="searchresults">
            <div className="results">{item.title}</div>
            <div className="images">
              <img className="img" src={item.thumbnail} alt="images" />
            </div>
            <div className="prices">
              <div className="price">
                {item.price} - {item.currency_id}
              </div>
            </div>
            <div className="buydiv">
              <button onClick={() => handleClick(item)} className="buybtn">
                {cart.some((itemCart) => itemCart.id === item.id) ? (
                  <BsFillCartCheckFill />
                ) : (
                  <BsFillCartPlusFill />
                )}
              </button>
            </div>
          </div>
        </div>
      ))}
      <div className="pages">
        {Array.from(Array(pages), (item, index) => {
          return (
            <button
              className="pagebtn"
              value={index}
              onClick={(e) => setCurrentPage(Number(e.target.value))}
            >
              {index}
            </button>
          );
        })}
      </div>
    </section>
  );
};
