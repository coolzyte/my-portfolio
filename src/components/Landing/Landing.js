import React from "react";
import Aux from "../../hoc/Aux";
import Layout from "../Layout/Layout";
import Hero from "../Hero/Hero";
import Skill from "../Skill/Skill";

const Landing = () => {
  return (
    <Aux>
      <Layout>
        <Hero />
        <Skill />
      </Layout>
    </Aux>
  );
};
export default Landing;
