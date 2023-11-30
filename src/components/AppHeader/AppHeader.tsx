import { useState } from "react";
import "./AppHeader.scss";
import logo from "./logo.svg";
import { Link } from "react-router-dom";
import { User } from "../../models/user";
import { Col, Layout, Menu, Row } from "antd";
const { Header, Content, Footer } = Layout;

type AppHeaderProps = {
  isClosed: boolean;
  clickHandler: () => void;
  userInfo: User | undefined;
};

export function AppHeader(props: AppHeaderProps) {
  const isClosed = props.isClosed;
  const navCssClass = !isClosed ? "opened" : "";

  function handleBurgerButtonClick(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    event.stopPropagation();
    props.clickHandler();
  }

  const links = [
    {
      key: "/",
      label: "Home",
    },
    { key: "catalog", label: "Catalog" },
    { key: "movie", label: "Movie" },
    { key: "move", label: "Bad link" },
    { key: "login", label: "Login/Register" },
  ];

  return (
    <>
      <Header>
        <Row style={{ width: "100%" }}>
          <Col xxl={{ span: 2, offset: 4 }} xl={{ span: 2, offset: 1 }}>
            <div className="demo-logo">
              <Link to="/">
                <img src={logo} alt="" />
              </Link>
            </div>
          </Col>
          Current user: {props.userInfo?.login}
          <Col xxl={{ span: 8, offset: 2 }} xl={{ span: 10, offset: 1 }}>
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={["2"]}
              items={links}
              className="nav-menu"
            />
          </Col>
        </Row>
      </Header>
      {/* <button
            className="mobile-only"
            onClick={(event) => handleBurgerButtonClick(event)}
          >
            burger
          </button> */}
    </>
  );
}
