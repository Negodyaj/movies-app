import { useState } from "react";
import "./Header.scss";
import logo from "./logo.svg";
import { Link } from "react-router-dom";
import { User } from "../../models/user";

type HeaderProps = {
  isClosed: boolean;
  clickHandler: () => void;
  userInfo: User | undefined;
};

export function Header(props: HeaderProps) {
  const isClosed = props.isClosed;
  const navCssClass = !isClosed ? "opened" : "";

  function handleBurgerButtonClick(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    event.stopPropagation();
    props.clickHandler();
  }

  return (
    <header>
      <div className="container flex-between">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        Current user: {props.userInfo?.login}
        <nav className={navCssClass}>
          <Link to="login" className="nav-link">
            Login
          </Link>
          <a href="#" className="nav-link">
            Photos
          </a>
          <a href="#" className="nav-link">
            Casts
          </a>
          <a href="#" className="nav-link">
            Awards
          </a>
          <Link to="catalog" className="nav-link">
            Catalog
          </Link>
          <Link to="move" className="link-button medium">
            Movie
          </Link>
        </nav>
        <button
          className="mobile-only"
          onClick={(event) => handleBurgerButtonClick(event)}
        >
          burger
        </button>
      </div>
    </header>
  );
}
