import React from "react";
import "./Banner.scss";

const banner = ({ name }) => {
  return (
    <section className="banner">
      <div className="wrapper banner__content">
        <h3 className="banner__title">{name}</h3>
        <ol className="banner__list">
          <li className="banner__item">
            <a href="/">Home</a>
          </li>
          <li className="banner__item active">{name}</li>
        </ol>
      </div>
    </section>
  );
};

export default banner;
