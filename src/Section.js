import { useEffect, useState } from "react";
import axios from "axios";
import { searchTitle } from "./api";

const Section = () => {
  const [categories, setCategories] = useState([]);
  const [cart, setCart] = useState([]);
  const [itensPerPage, setItensPerPage] = useState(2);
  const [currentPage, setCurrentPage] = useState(0);
  const [results, setResults] = useState([]);

  const getCategories = async () => {
    try {
      const response = await axios.get(
        "https://api.mercadolibre.com/sites/MLB/categories"
      );
      const data = response.data;
      setCategories(data);
    } catch (error) {
      console.log(error);
    }
  };

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

  const addToCart = (results) => {
    console.log("add cart");
    setCart([...cart, results]);
  };

  const onSearchHandler = async (results) => {
    const result = await searchTitle(results);
    setResults(result.results);
    console.log("titulo", result);
  };

  useEffect(() => {
    getCategories();
  }, []);
  return (
    <section>
      <div className="b">
        {categories.map((categorie) => (
          <div className="categories" key={categorie.id}>
            <h2>{categorie.name}</h2>
          </div>
        ))}
      </div>
      <div className="a">
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

        {currentResults &&
          currentResults.map((res) => (
            <div className="searchresults" key={res.id}>
              <p className="results">{res.title}</p>
              <div className="images">
                <img className="img" src={res.thumbnail} alt="images" />
                <button className="buybtn" onClick={() => addToCart(results)}>
                  COMPRAR
                </button>
              </div>

              <div className="results1">
                {res.price} - {res.currency_id}
              </div>
            </div>
          ))}
        <div className="changepage">
          {Array.from(Array(pages), (results, index) => {
            return (
              <button
                style={
                  index === currentPage ? { backgroundColor: "gray" } : null
                }
                className="pagebtn"
                value={index}
                onClick={(e) => setCurrentPage(Number(e.target.value))}
              >
                {index + 1}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Section;
