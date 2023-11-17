import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import { HomePage } from "./pages/HomePage/HomePage";
import { Header } from "./components/Header/Header";
import { CatalogPage } from "./pages/CatalogPage/CatalogPage";

export function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <CatalogPage />
    </div>
  );
}
