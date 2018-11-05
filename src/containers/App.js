import React, { Component } from "react";
import Header from "../components/Header/Header";
import Landing from "../components/Landing/Landing";
// import Footer from "../components/Footer/Footer";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Landing />
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
