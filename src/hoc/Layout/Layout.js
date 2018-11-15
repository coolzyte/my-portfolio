import React, { Component } from "react";
import Aux from "../Aux/Aux";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import Footer from "../../components/Footer/Footer";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
import classes from "./Layout.module.scss";

class Layout extends Component {
  constructor() {
    super();
    this.state = {
      showSideDrawer: false
    };
  }

  onSearchChange(event) {
    console.log(event);
  }

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  sideDrawerToggleHandler = () => {
    this.setState(prevState => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };
  render() {
    return (
      <Aux>
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
        />
        <main className={classes.Container}>{this.props.children}</main>
        <Footer />
      </Aux>
    );
  }
}

export default Layout;
