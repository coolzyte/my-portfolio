import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from "../components/Landing/Landing";
import AboutPage from "../components/AboutPage/AboutPage";
import PortfolioPage from "../components/PortfolioPage/PortfolioPage";
import PortfolioDetails from "../components/PortfolioPage/PortfolioDetails/PortfolioDetails";
import BlogPage from "../components/BlogPage/BlogPage";
import "./App.scss";

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
        </div>
      </Router>
    );
  }
}

export default App;
