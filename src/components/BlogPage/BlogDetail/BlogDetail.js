import React, { Component } from "react";
import Aux from "../../../hoc/Aux/Aux";
import Layout from "../../../hoc/Layout/Layout";
import Banner from "../../Banner/Banner";
import Details from "./Details";

class BlogDetail extends Component {
  render() {
    return (
      <Aux>
        <Layout>
          <Banner name="Blog Details" />
          <Details />
        </Layout>
      </Aux>
    );
  }
}

export default BlogDetail;
