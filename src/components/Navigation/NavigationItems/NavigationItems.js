import React from "react";
import "./NavigationItems.module.scss";
import NavigationItem from "./NavigationItem/NavigationItem";
import classes from "./NavigationItems.module.scss";

const navigationItems = () => (
  <ul className={classes.NavigationItems}>
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
