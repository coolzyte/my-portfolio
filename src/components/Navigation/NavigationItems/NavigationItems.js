import React from "react";
import "./NavigationItems.scss";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = () => (
  <ul className="NavigationItems">
    <NavigationItem link="/" active>
      Home
    </NavigationItem>
    <NavigationItem link="/">About</NavigationItem>
    <NavigationItem link="/">Portfolio</NavigationItem>
    <NavigationItem link="/">Blog</NavigationItem>
    <NavigationItem link="/">Contact</NavigationItem>
  </ul>
);

export default navigationItems;
