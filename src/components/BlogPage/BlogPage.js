import React, { Component } from "react";
import Aux from "../../hoc/Aux/Aux";
import Layout from "../../hoc/Layout/Layout";
import Banner from "../../components/Banner/Banner";
import Blog from "../BlogPage/Blog/Blog";
import { blogContent } from "../BlogPage/Blog/blogContent";

class BlogPage extends Component {
  render() {
    return (
      <Aux>
        <Layout>
          <Banner name="Blog" />
          <Blog blogContent={blogContent} />
        </Layout>
      </Aux>
    );
  }
}

export default BlogPage;
