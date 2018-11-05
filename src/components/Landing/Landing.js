import React from "react";
import Aux from "../../hoc/Aux";
import Layout from "../Layout/Layout";
import Hero from "../Hero/Hero";
import Skill from "../Skill/Skill";
import Portfolio from "../Portfolio/Portfolio";
import { projects } from "../Portfolio/projects";
import Testimonial from "../Testimonial/Testimonial";
import { testimonialsContent } from "../Testimonial/testimonialsContent";

const Landing = () => {
  return (
    <Aux>
      <Layout>
        <Hero />
        <Skill />
        <Portfolio projects={projects} />
        <Testimonial testimonialsContent={testimonialsContent} />
      </Layout>
    </Aux>
  );
};
export default Landing;
