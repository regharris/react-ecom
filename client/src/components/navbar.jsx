import React from "react";
import ReactDOM from "react-dom";
import "./stylesheet/App.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div id="nav-list">
        <Link to="/">
          <li className="nav">Home</li>
        </Link>
        <Link to="/products">
          <li className="nav">Products</li>
        </Link>
        <Link to="/contacts">
          <li className="nav">Contact</li>
        </Link>
      </div>
      <section id="main-heading">PoWer LaB</section>
      <section id="sub-heading">Build Your Dream Car</section>
    </div>
  );
}
export default Navbar;
