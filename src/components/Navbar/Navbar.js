import React from "react";
import NavLink from "./NavLink/NavLink";

const NavLinks = props => (
  <nav className="primary-nav">
    <ul className="primary-nav__content">
      <NavLink link="/" active>
        Home
      </NavLink>
      <NavLink link="/about">About</NavLink>
      <NavLink link="/portfolio">Portfolio</NavLink>
      <NavLink link="/service">Service</NavLink>
      <NavLink link="/blog">Blog</NavLink>
      <NavLink link="/contact">Contact</NavLink>
    </ul>
  </nav>
);

export default NavLinks;
