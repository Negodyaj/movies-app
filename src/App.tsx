import React, { useEffect, useState } from "react";
import "./App.scss";
import { HomePage } from "./pages/HomePage/HomePage";
import { AppHeader } from "./components/AppHeader/AppHeader";
import { CatalogPage } from "./pages/CatalogPage/CatalogPage";
import { MoviePage } from "./pages/MoviePage/MoviePage";
import { Routes, Route, useNavigate } from "react-router-dom";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { User } from "./models/user";

import { Layout, theme } from "antd";
const { Content, Footer } = Layout;

export function App() {
  const [isClosed, setIsClosed] = useState(true);
  const [clicksCount, setClicksCount] = useState(555);
  const [userInfo, setUserInfo] = useState<User | undefined>(undefined);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userInfo) {
      //navigate("login");
    }
  }, [userInfo, navigate]);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

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
    <Layout className="layout" onClick={handleAppClick}>
      <AppHeader
        isClosed={isClosed}
        clickHandler={handleButtonClick}
        userInfo={userInfo}
      />
      <Content style={{ padding: "0 50px" }}>
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
          <Route path="movie/:movieId" element={<MoviePage />} />
          {/* localhost:3000/movie/7 */}

          {/* Using path="*"" means "match anything", so this route
              acts like a catch-all for URLs that we don't have explicit
              routes for. */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        {/* <div
            className="site-layout-content"
            style={{ background: colorBgContainer }}
          >
            Content
          </div> */}
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </Layout>
  );
}
