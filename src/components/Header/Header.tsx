import { useState } from "react";
import "./Header.scss";
import logo from "./logo.svg";

type HeaderProps = {
  isClosed: boolean;
  clickHandler: () => void;
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
        <a href="/">
          <img src={logo} alt="" />
        </a>
        <nav className={navCssClass}>
          <a href="#" className="nav-link">
            Who is Batman?
          </a>
          <a href="#" className="nav-link">
            Photos
          </a>
          <a href="#" className="nav-link">
            Casts
          </a>
          <a href="#" className="nav-link">
            Awards
          </a>
          <a href="#" className="nav-link">
            DC Comics
          </a>
          <a href="#" className="link-button medium">
            Watch Series
          </a>
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
