import React from "react";
import "./NavigationItems.module.scss";
import NavigationItem from "./NavigationItem/NavigationItem";
import classes from "./NavigationItems.module.scss";

const navigationItems = () => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/" active>
      Home
    </NavigationItem>
    <NavigationItem link="/aboutus">About</NavigationItem>
    <NavigationItem link="/portfolio">Portfolio</NavigationItem>
    <NavigationItem link="/blog">Blog</NavigationItem>
    <NavigationItem link="/contactus">Contact</NavigationItem>
  </ul>
);

export default navigationItems;
