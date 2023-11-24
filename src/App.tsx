import React, { useEffect, useState } from "react";
import "./App.scss";
import { HomePage } from "./pages/HomePage/HomePage";
import { Header } from "./components/Header/Header";
import { CatalogPage } from "./pages/CatalogPage/CatalogPage";
import { MoviePage } from "./pages/MoviePage/MoviePage";
import { Routes, Route, useNavigate } from "react-router-dom";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { User } from "./models/user";

export function App() {
  const [isClosed, setIsClosed] = useState(true);
  const [clicksCount, setClicksCount] = useState(555);
  const [userInfo, setUserInfo] = useState<User | undefined>(undefined);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userInfo) {
      navigate("login");
    }
  }, [userInfo, navigate]);

  function handleAppClick() {
    setIsClosed(true);
  }
  function handleButtonClick() {
    setIsClosed(false);
  }
  function increaseCounter() {
    setClicksCount(clicksCount + 1);
  }

  const handleLogIn = (user: User) => {
    setUserInfo(user);
    alert("got the data. it's " + user.name);
  };

  return (
    <div className="App" onClick={handleAppClick}>
      <Header
        isClosed={isClosed}
        clickHandler={handleButtonClick}
        userInfo={userInfo}
      />
      <Routes>
        <Route path="/" element={<HomePage handler={increaseCounter} />} />
        <Route
          path="login"
          element={<LoginPage logInHandler={handleLogIn} />}
        />
        <Route
          path="catalog"
          element={<CatalogPage clicksCount={clicksCount} />}
        />
        <Route path="movie" element={<MoviePage />} />

        {/* Using path="*"" means "match anything", so this route
              acts like a catch-all for URLs that we don't have explicit
              routes for. */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}
