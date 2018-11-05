import React from "react";
import Aux from "../../hoc/Aux";
import { container } from "./Layout.module.scss";

const Layout = ({ children }) => (
  <Aux>
    <main className={container}>{children}</main>
  </Aux>
);

export default Layout;
