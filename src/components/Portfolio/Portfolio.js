import React from "react";
import PageTitle from "../PageTitile/PageTitle";
import PortfolioCard from "./PortfolioCard";
import "./Portfolio.scss";

const Portfolio = ({ projects }) => {
  return (
    <section className="works p-tb">
      <div className="section-title section-title--left">
        <PageTitle
          heading="CHECK LATEST WORK"
          desc="But I must explain to you how all this mistaken idea of denouncing
          pleasure and praising pain was born and I will give you a complete
          account of the monen vai kemon asen"
        />
      </div>

      <div className="masonry">
        <div className="works__menu">
          <button className="active" data-filter="*">
            all
          </button>
          <button data-filter=".ui">ui&amp;ux</button>
          <button data-filter=".web">web design</button>
          <button data-filter=".app">app design</button>
          <button data-filter=".sketch">sketch design</button>
        </div>

        <div className="works__row item-grid-2">
          {projects.map((user, i) => {
            return (
              <PortfolioCard
                key={i}
                id={projects[i].id}
                name={projects[i].name}
                desc={projects[i].desc}
                pic={projects[i].pic}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
