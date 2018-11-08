import React from "react";
import Aux from "../../hoc/Aux/Aux";
import Layout from "../../hoc/Layout/Layout";
import Banner from "../Banner/Banner";
import Skill from "../Skill/Skill";

const aboutPage = () => {
  return (
    <Aux>
      <Layout>
        <Banner name="About Me" />
        <Skill />
      </Layout>
    </Aux>
  );
};
export default aboutPage;
