import React from "react";
import "../styles/navbar.css";
const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light background-navbar border-bottom ">
      <a href="" className="navbar-brand">
        Crypto Degen Station
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto float-right">
          <li className="nav-item">
            <a className="nav-link text-right" href="">
              Wishlist
            </a>
          </li>

          <li className="nav-item text-right">
            <a className="nav-link" href="">
              Portfolio
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
