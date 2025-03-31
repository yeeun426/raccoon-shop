import { React, useState } from "react";

function Header() {
  const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(true);

  const toggleNavbar = () => {
    setIsNavbarCollapsed(!isNavbarCollapsed);
  };

  return (
    <nav className="navbar navbar-expand-sm">
      <a className="navbar-brand pr-5" href="javascript:void(0)">
        <img className="logo" src="img/logo.png" alt="" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        onClick={toggleNavbar}
        aria-controls="navbarNav"
        aria-expanded={!isNavbarCollapsed}
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className={`collapse navbar-collapse ${
          isNavbarCollapsed ? "" : "show"
        }`}
        id="navbarNav"
      >
        <form className="d-flex search-container">
          <input
            className="form-control header-input"
            type="text"
            placeholder="찾고 싶은 상품을 검색해보세요!"
          />
        </form>
      </div>
      <div
        className={`collapse navbar-collapse ${
          isNavbarCollapsed ? "" : "show"
        }`}
        id="navbarNav"
      >
        <ul className="navbar-nav mynavbar pl-4 header-me">
          <li className="nav-item">
            <a
              className="nav-link"
              type="button"
              data-toggle="modal"
              data-target="#Login"
              href="javascript:void(0)"
            >
              LOGIN
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              type="button"
              data-toggle="modal"
              data-target="#SignUp"
              href="javascript:void(0)"
            >
              JOIN
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="javascript:void(0)">
              CART
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
