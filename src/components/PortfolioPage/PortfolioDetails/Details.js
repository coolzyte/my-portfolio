import React from "react";
import Aux from "../../../hoc/Aux/Aux";
import P2 from "../../../assets/images/work/p2.jpg";
import P7 from "../../../assets/images/work/p7.jpg";
import P8 from "../../../assets/images/work/p8.jpg";
import P9 from "../../../assets/images/work/p9.jpg";
import P10 from "../../../assets/images/work/p10.jpg";
import P16 from "../../../assets/images/work/p16.jpg";
import P17 from "../../../assets/images/work/p17.jpg";
import P33 from "../../../assets/images/work/p33.jpg";
import i1 from "../../../assets/images/instagram/i1.png";
import i2 from "../../../assets/images/instagram/i2.png";
import i3 from "../../../assets/images/instagram/i3.png";
import i4 from "../../../assets/images/instagram/i4.png";
import i5 from "../../../assets/images/instagram/i5.png";
import i6 from "../../../assets/images/instagram/i6.png";
import PortfolioCard from "../../Portfolio/PortfolioCard";
import "./Details.scss";

const Details = ({ projects }) => {
  return (
    <Aux>
      <div className="work-details p-tb">
        <div className="work-details__container">
          <div className="grid-item-8">
            <img className="image" src={P2} alt="work-img" />
            <div className="project-idea m-bottom-4">
              <h3 className="heading heading--2">
                <span>Share your Ideas</span> with us <br /> We design and
                develop <span>your dreams</span>
              </h3>
              <p className="m-bottom-2">
                On the other hand, we denounce with righteous indignation and
                dislike men who are so beguiled and demoralized by the charms of
                pleasure of the moment, so blinded by desire, that they cannot
                foresee the pain and trouble that arew how to pursue pleasure
                rationally encounter consequences that are extremely painful.
                Nor again is there anyone loves or pursues or desires to obtain
                pain of itself, because it is pain, but because occas
              </p>

              <p>
                On the other hand, we denounce with righteous indignation and
                dislike men who are so beguiled and demorathe charms of pleasure
                of the moment, so blinded by desire, that they cannot foresee
                the pain and trouble
              </p>
            </div>
            <div className="work-brief">
              <h3 className="heading heading--2">
                <span>Project</span> Brief
              </h3>
              <p>
                On the other hand, we denounce with righteous indignation and
                dislike men who are so beguiled and demoralized by the charms of
                pleasure of the moment, so blinded by desire, that they cannot
                foresee the pain and trouble that arew how to pursue pleasure
                rationally encounter consequences that are extremely painful
              </p>
              <div className="work-brief__row m-top-3">
                <div className="work-brief__item">
                  <p className="single-quote">
                    <span className="text-mark">Main</span> the other hand, we
                    denounce with ighteous ion and dislike men who are so
                    beguiled
                  </p>
                </div>
                <div className="work-brief__item">
                  <p className="single-quote">
                    <span className="text-mark">Main</span> the other hand, we
                    denounce with ighteous ion and dislike men who are so
                    beguiled
                  </p>
                </div>
              </div>
            </div>
            <div className="project-design-video m-top-4">
              <div className="m-bottom">
                <h3 className="heading heading--2">
                  <span>Video of</span> Project Design
                </h3>
                <p className="m-bottom-4">
                  On the other hand, we denounce with righteous indignation and
                  dislike men who are so beguiled and demoralized by the charms
                  of pleasure of the moment, so blinded by desire, that they
                  cannot foresee the pain and trouble that arew how to pursue
                  pleasure rationally encounter consequences that are extremely
                  painful
                </p>

                <div className="work-details__video-clip">
                  <div>
                    <a href="/work-details">
                      <img src={P7} alt="work-img" />
                    </a>
                  </div>

                  <div className="work-video">
                    <a href="/work-details">
                      <img src={P8} alt="work-img" />
                    </a>
                  </div>

                  <div className="mb-xsm-30">
                    <a href="work-details.html">
                      <img src={P9} alt="work-img" />
                    </a>
                  </div>

                  <div className="work-video">
                    <a href="/work-details">
                      <img src={P10} alt="portfolio-img" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="work-brief__row">
                <div className="work-brief__item">
                  <p className="fa fa-check">
                    <span className="text-mark">Main</span> the other hand, we
                    denounce with ighteous ion and dislike men who are so
                    beguiled
                  </p>
                </div>
                <div className="work-brief__item">
                  <p className="fa fa-check">
                    <span className="text-mark">Main</span> the other hand, we
                    denounce with ighteous ion and dislike men who are so
                    beguiled
                  </p>
                </div>
                <div className="work-brief__item">
                  <p className="fa fa-check">
                    <span className="text-mark">Main</span> the other hand, we
                    denounce with ighteous ion and dislike men who are so
                    beguiled
                  </p>
                </div>
                <div className="work-brief__item">
                  <p className="fa fa-check">
                    <span className="text-mark">Main</span> the other hand, we
                    denounce with ighteous ion and dislike men who are so
                    beguiled
                  </p>
                </div>
              </div>
              <ul className="pagination m-top-3 flex-item">
                <li>
                  <a href="addlinklater">
                    <i className="fa fa-long-arrow-left" aria-hidden="true" />
                    previous
                  </a>
                </li>
                <li className="ml-auto">
                  <a href="addlinklater">
                    next
                    <i className="fa fa-long-arrow-right" aria-hidden="true" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="grid-item-4">
            <div className="work-details__sidebar center">
              <div className="info m-bottom-4">
                <h4 className="heading heading--2">
                  <span>project</span> information
                </h4>
                <div className="list">
                  <h6>client</h6>
                  <p>robarto carlos</p>
                </div>
                <div className="list">
                  <h6>project name</h6>
                  <p>creative mockup design</p>
                </div>
                <div className="list">
                  <h6>category</h6>
                  <p>creative design work</p>
                </div>
                <div className="list">
                  <h6>working hours</h6>
                  <p>600 hours</p>
                </div>
                <div className="list">
                  <h6>project cost</h6>
                  <p>7 miilion us dollar</p>
                </div>
              </div>
              <div className="work-details__social">
                <h4 className="heading heading--2">
                  <span>From </span>
                  Instagram
                </h4>
                <ul className="work-details__social-img">
                  <li>
                    <a href="addlinklater">
                      <img src={i1} alt="instagram-img" />
                    </a>
                  </li>
                  <li>
                    <a href="addlinklater">
                      <img src={i2} alt="instagram-img" />
                    </a>
                  </li>
                  <li>
                    <a href="addlinklater">
                      <img src={i3} alt="instagram-img" />
                    </a>
                  </li>
                  <li>
                    <a href="addlinklater">
                      <img src={i4} alt="instagram-img" />
                    </a>
                  </li>
                  <li>
                    <a href="addlinklater">
                      <img src={i5} alt="instagram-img" />
                    </a>
                  </li>
                  <li>
                    <a href="addlinklater">
                      <img src={i6} alt="instagram-img" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="m-bottom-4">
                <a href="/work-details">
                  <img className="image" src={P33} alt="portfolio-img" />
                </a>
              </div>
              <div className="info">
                <h4 className="heading heading--2">
                  <span>Portfolio </span>
                  Brochure
                </h4>
                <ul>
                  <li>
                    <img src={P16} alt="doc" />
                    <a href="addlinklater">DOWNLOAD PDF BROCHURE</a>
                  </li>
                  <li>
                    <img src={P17} alt="doc" />
                    <a href="addlinklater">DOWNLOAD DOC BROCHURE</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="others-work p-b">
        <div className="addlinklater">
          <h3 className="heading heading--2">
            <span>here </span>
            are some <br /> Related <span>Projects</span>
          </h3>
          <div className="others-work__container">
            <PortfolioCard
              id={projects[0].id}
              name={projects[0].name}
              desc={projects[0].desc}
              pic={projects[0].pic}
            />
            <PortfolioCard
              id={projects[4].id}
              name={projects[4].name}
              desc={projects[4].desc}
              pic={projects[4].pic}
            />
            <PortfolioCard
              id={projects[2].id}
              name={projects[2].name}
              desc={projects[2].desc}
              pic={projects[2].pic}
            />
          </div>
        </div>
      </div>
    </Aux>
  );
};

export default Details;
