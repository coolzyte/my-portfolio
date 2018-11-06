import React from "react";
import "./Toolbar.scss";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
// import MobileMenu from "./MobileMenu/MobileMenu";

const Toolbar = () => (
  <header className="site-header">
    <div className="wrapper">
      <div className="site-header__menu-container flex-item">
        <Logo />
        <div className="site-header__menu-content flex-item">
          <NavigationItems />
          {/* <MobileMenu /> */}
        </div>
      </div>
    </div>
  </header>
);

export default Toolbar;
