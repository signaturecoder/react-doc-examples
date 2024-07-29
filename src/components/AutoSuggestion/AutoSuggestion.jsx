import React, { useEffect, useState } from "react";
import { fruitData } from '../../constants/fruitData';
import { debounce } from "../../util/debounce";

import "./AutoSuggestion.module.css";

const AutoSuggestion = () => {
  const [searchInput, setSearchInput] = useState("");
  const [fruits, setFruits] = useState([]);
  const [filterItem, setFilterItem] = useState([]);

  const fetchData = () => {
    return new Promise((resolve, reject) => {
      resolve(fruitData);
    });
  };

  useEffect(() => {
    fetchData().then((data) => setFruits(data));
  }, []);

  const renderItem = filterItem.map((item, i) => (
    <li
      key={i}
      className="list-item"
      onClick={(e) => setSearchInput(e.target.innerText)}
    >
      {item.fn}
    </li>
  ));

  const handleChange = (val) => {
    setSearchInput(val);
    if (val && fruits) {
      let filteredList = fruits.filter((item) => item.fn.includes(val));
      setFilterItem(filteredList);
    } else {
      setFilterItem([]);
    }
  };

  const optimisedFn = debounce(handleChange, 3000);

  return (
    <div className="App">
      <h1>Auto Suggestion</h1>
      <label htmlFor="search-box" className="input-search-box">Search Fruits</label>
      <input
        id="search-box"
        type="text"
        value={searchInput}
        onChange={(e) => optimisedFn(e.target.value)}
        placeholder="search fruit name"
      />
      <ul className="list-container">
        {renderItem.length > 0 ? renderItem : <li>No Result</li>}
      </ul>
    </div>
  );
};

export default AutoSuggestion;
