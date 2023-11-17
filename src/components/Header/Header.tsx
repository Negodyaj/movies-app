import { useState } from "react";
import "./Header.scss";
import logo from "./logo.svg";

export function Header() {
  const [isOpened, setIsOpened] = useState(false);

  const navCssClass = isOpened ? "opened" : "";

  function handleBurgerButtonClick() {
    setIsOpened(!isOpened);
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
        <button className="mobile-only" onClick={handleBurgerButtonClick}>
          burger
        </button>
      </div>
    </header>
  );
}
