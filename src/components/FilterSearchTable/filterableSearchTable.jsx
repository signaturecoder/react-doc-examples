import React, { useState } from "react";
import { ProductTable } from "./productTable";
import { SearchBar } from "./searchBar"; 

export const FilterableSearchTable = ({ products }) => {

    const [searchText, setSearchText] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const handleInputChange = (e) => {
        console.log("Event Input ", e);
        setSearchText(e.target.value);
    }

    const handleCheckboxClick = (e) => {
        console.log("Event ", e.target.checked);
        const box = e.target.checked;
        setIsChecked(box);
    }

  return (
    <div>
      <SearchBar onInputChange={handleInputChange} onCheckboxClick={handleCheckboxClick} filterText={searchText} inStock={isChecked}/>
      <ProductTable products={products} filterText={searchText} inStock={isChecked}/>
    </div>
  );
};

