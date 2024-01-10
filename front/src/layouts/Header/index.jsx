import React from "react";
import "./index.scss";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header id="header">
      <nav id="nav">
        <div className="icon">
          <img src="https://preview.colorlib.com/theme/consultingbiz/assets/img/logo/logo.png.webp" alt="" />
        </div>
        <div className="navbtns">
          <ul>
            <NavLink to={"/"} className={true ? "activeNavLink" : "pendingNavLink"}><li>Home</li></NavLink>
            <NavLink to={"/AddPage"} className={true ? "activeNavLink" : "pendingNavLink"}><li>Add Page</li></NavLink>
            <NavLink className={true ? "activeNavLink" : "pendingNavLink"}><li>Wishlist</li></NavLink>
            <NavLink className={true ? "activeNavLink" : "pendingNavLink"}><li>Blog</li></NavLink>
            <NavLink className={true ? "activeNavLink" : "pendingNavLink"}><li>Contact</li></NavLink>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
