import React from "react";
import PageTitle from "../PageTitile/PageTitle";
import "./NewsLetter.scss";

const NewsLetter = () => {
  return (
    <section className="newsletter wrapper p-tb">
      <div className="section-title">
        <PageTitle
          heading="Subscribe Newsletter"
          desc="But I must explain to you how all this mistaken idea of denouncing
          pleasure and praising pain was born and I will give you a complete
          account of the monen vai kemon asen"
        />
      </div>
      <div className="newsletter__box">
        <form action="">
          <input
            type="text"
            className="newsletter__input"
            placeholder="Your email address..."
            name="email"
          />
          <button type="submit" className="submit">
            <i className="fa fa-paper-plane-o" />
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsLetter;
