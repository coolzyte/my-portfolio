import React from "react";
import LogoImage from "../../assets/images/c-logo.svg";
import "./Logo.scss";

const Logo = () => (
  <div className="logo">
    <a href="/">
      <img src={LogoImage} alt="Logo" />
    </a>
  </div>
);

export default Logo;
