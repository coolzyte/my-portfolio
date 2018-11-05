import React from "react";
import Button from "../Button/Button";
import "./Hero.scss";

const Hero = () => (
  <div className="hero">
    <div className="wrapper">
      <div className="hero__text-content">
        <h5>HAY! THERE</h5>
        <h1>I AM Muhammed</h1>
        <h2 className="cd-headline clip is-full-width">
          a professional
          <span className="cd-words-wrapper">
            <b className="is-visible"> developer</b>
            <b>Freelancer</b>
            <b>trainer</b>
            <b>employer</b>
          </span>
        </h2>
        <Button name="Hire Me" />
      </div>
    </div>
    {/* <Social /> */}
  </div>
);

export default Hero;
