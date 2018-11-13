import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from "../components/Landing/Landing";
import AboutPage from "../components/AboutPage/AboutPage";
import PortfolioPage from "../components/PortfolioPage/PortfolioPage";
import PortfolioDetails from "../components/PortfolioPage/PortfolioDetails/PortfolioDetails";
import BlogPage from "../components/BlogPage/BlogPage";
import BlogDetail from "../components/BlogPage/BlogDetail/BlogDetail";
import "./App.scss";
import ContactPage from "../components/ContactPage/ContactPage";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Landing} />
          <Route exact path="/aboutus" component={AboutPage} />
          <Route exact path="/portfolio" component={PortfolioPage} />
          <Route exact path="/portfolio-details" component={PortfolioDetails} />
          <Route exact path="/blog" component={BlogPage} />
          <Route exact path="/blog-details" component={BlogDetail} />
          <Route exact path="/contact-us" component={ContactPage} />
        </div>
      </Router>
    );
  }
}

export default App;
