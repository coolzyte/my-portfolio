import React from "react";
import Button from "../Button/Button";
import PageTitle from "../PageTitile/PageTitle";
import "./Skill.scss";

const Skill = props => {
  const EightyFive = {
    width: "85%"
  };
  const Ninety = {
    width: "90%"
  };
  const SeventyFive = {
    width: "75%"
  };
  const SixtyEight = {
    width: "68%"
  };
  return (
    <section className="about-me p-t">
      <div className="section-title">
        <PageTitle
          heading="Some Word's About Me"
          desc="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
        fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
        sequi nesciunt. Neque porro quisquam est"
        />
      </div>
      <div className="about-me__content item-grid-2">
        <div className="about-me__text">
          <p className="m-bottom-2">
            <span className="letter-big">S</span>
            abuj must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and expound the actual teachings of the great
            explorer of the truth, the master-builder of human happiness. No one
            rejects, dislikes, or avoids pleasure itself
          </p>
          <p>
            Imust explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and expound the actual teachings of the great
            explorer of the truth, the master-builder
          </p>
          <Button name="Download CV" />
        </div>
        <div className="about-me__progress-bar">
          <div className="skill">
            <div className="progress">
              <div className="title">UI & UX DESIGN</div>
              <div
                style={EightyFive}
                data-progress="90%"
                className="progress-bar"
              >
                <span>85%</span>
              </div>
            </div>
            <div className="progress">
              <div className="title">WEB DESIGN</div>
              <div style={Ninety} data-progress="70%" className="progress-bar">
                <span>90%</span>
              </div>
            </div>
            <div className="progress">
              <div className="title">APPS DESIGN</div>
              <div
                style={SeventyFive}
                data-progress="60%"
                className="progress-bar"
              >
                <span>75%</span>
              </div>
            </div>
            <div className="progress">
              <div className="title">SKETCH DESIGN</div>
              <div
                style={SixtyEight}
                data-progress="80%"
                className="progress-bar"
              >
                <span>68%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
