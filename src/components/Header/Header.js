import React from "react";
import "./Header.scss";
import Logo from "../Logo/Logo";
// import NavLinks from "./NavLinks/NavLinks";
// import MobileMenu from "./MobileMenu/MobileMenu";

const Header = () => (
  <header className="site-header">
    <div className="wrapper">
      <div className="site-header__menu-container flex-item">
        <Logo />
        <div className="site-header__menu-content flex-item">
          {/* <NavLinks /> */}
          {/* <MobileMenu /> */}
        </div>
      </div>
    </div>
  </header>
);

export default Header;
