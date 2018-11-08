import React from "react";
import Aux from "../../hoc/Aux/Aux";
import { btn } from "./Button.module.scss";

const Button = ({ name }) => (
  <Aux>
    <a href="contact-us.html" className={btn}>
      {name}
    </a>
  </Aux>
);

export default Button;
