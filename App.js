import React, { createContext, useState } from "react";
import ReactDOM from "react-dom/client";
import Form from "./src/components/UnderstandingContext/Form";
import "./index.css";
import Button from "./src/components/UnderstandingContext/Button";
import MyProviders from "./src/components/UnderstandingContext/MyProviders";
import WelcomePanel from "./src/components/UnderstandingContext/WelcomePanel";
import Home from "./src/components/hooks/home";
import AutoSuggestion from "./src/components/AutoSuggestion/AutoSuggestion";
// import { FilterableSearchTable }  from "./src/components/FilterSearchTable/filterableSearchTable";

// const PRODUCTS = [
//   { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
//   { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
//   { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
//   { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
//   { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
//   { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
// ];

/**
 *       <div className="App">
        /* <Game /> */
/* <FilterableSearchTable products={PRODUCTS}/> */
/* </div>
 */

export const ThemeContext = createContext("light");
export const CurrentUserContext = createContext(null);

const App = () => {
  const [theme, setTheme] = useState("dark");

  const handleToggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      {/* <MyProviders theme={theme}>
        <WelcomePanel />
      </MyProviders> */}
      <Home />
      <AutoSuggestion />
      {/* <Button onBtnClick={handleToggleTheme}>Toggle theme</Button> */}
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
