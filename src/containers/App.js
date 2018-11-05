import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "../components/Header/Header";
import Landing from "../components/Landing/Landing";
import Footer from "../components/Footer/Footer";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={Landing} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
