import React from "react";

const TestimonialCard = ({ pic, name, desc, sub }) => (
  <div className="swiper-slide center">
    <div className="testimonials__image">
      <img src={pic} alt="testimonial-img" />
    </div>
    <h3 className="title">{name}</h3>
    <span className="subtitle">{sub}</span>
    <p className="text">{desc}</p>
  </div>
);

export default TestimonialCard;
