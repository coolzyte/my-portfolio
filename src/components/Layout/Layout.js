import React from "react";
import Aux from "../../hoc/Aux";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import Footer from "../Footer/Footer";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
import { container } from "./Layout.module.scss";

const Layout = ({ children }) => (
  <Aux>
    <Toolbar />
    <SideDrawer />
    <main className={container}>{children}</main>
    <Footer />
  </Aux>
);

export default Layout;
