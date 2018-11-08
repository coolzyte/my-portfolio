import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from "../components/Landing/Landing";
import AboutPage from "../components/AboutPage/AboutPage";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Landing} />
          <Route exact path="/aboutus" component={AboutPage} />
        </div>
      </Router>
    );
  }
}

export default App;
