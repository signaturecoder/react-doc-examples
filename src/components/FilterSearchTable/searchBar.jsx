import React from "react";

export const SearchBar = ({ onInputChange, onCheckboxClick, filterText, inStock}) => {
  return (
    <form>
        <input type="text" placeholder="search product..." onChange={onInputChange} value={filterText}/>
        <label>
        <input type="checkbox" name="myCheckbox" onClick={onCheckboxClick} value={inStock}/>
        Only show products in stock
        </label>
    </form>
  );
};

