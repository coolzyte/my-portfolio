import React, { Component } from "react";
import Aux from "../../hoc/Aux/Aux";
import Layout from "../../hoc/Layout/Layout";
import Banner from "../Banner/Banner";
import { projects } from "../Portfolio/projects";
import Portfolio from "../Portfolio/Portfolio";

class ProjectPage extends Component {
  render() {
    return (
      <Aux>
        <Layout>
          <Banner name="Portfolio" />

          <Portfolio projects={projects} />
        </Layout>
      </Aux>
    );
  }
}

export default ProjectPage;
