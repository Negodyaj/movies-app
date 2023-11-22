import React, { useState } from "react";
import "./App.scss";
import { HomePage } from "./pages/HomePage/HomePage";
import { Header } from "./components/Header/Header";
import { CatalogPage } from "./pages/CatalogPage/CatalogPage";

export function App() {
  const [isClosed, setIsClosed] = useState(true);
  const [clicksCount, setClicksCount] = useState(555);

  function handleAppClick() {
    setIsClosed(true);
  }

  function handleButtonClick() {
    setIsClosed(false);
  }

  function increaseCounter() {
    setClicksCount(clicksCount + 1);
  }

  return (
    <div className="App" onClick={handleAppClick}>
      <Header isClosed={isClosed} clickHandler={handleButtonClick} />
      <HomePage handler={increaseCounter} />
      <CatalogPage clicksCount={clicksCount} />
    </div>
  );
}
