import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" className="navbar-brand">
          MY FINDER
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <Link to="/">
              <li className="nav-link">HOME</li>
            </Link>
            <Link to="/post">
              <li className="nav-link">POST</li>
            </Link>
            <Link to="/find">
              <li className="nav-link">FIND</li>
            </Link>
            <Link to="/about">
              <li className="nav-link">ABOUT US</li>
            </Link>
            <Link to="/contact">
              <li className="nav-link">CONTACT US</li>
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
