import { useState } from "react";

import { searchTitle } from "./api";

const Section = () => {
  const [itensPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(0);
  const [results, setResults] = useState([]);

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
                <button className="btn">COMPRAR</button>
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

export default Section;
