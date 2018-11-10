import React, { Component } from "react";
import Aux from "../../../hoc/Aux/Aux";
import Layout from "../../../hoc/Layout/Layout";
import Banner from "../../Banner/Banner";
import Details from "./Details";
import { projects } from "../../Portfolio/projects";

class PortfolioDetails extends Component {
  render() {
    return (
      <Aux>
        <Layout>
          <Banner name="Portfolio Details" />
          <Details projects={projects} />
        </Layout>
      </Aux>
    );
  }
}

export default PortfolioDetails;
