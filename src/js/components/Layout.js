import React from 'react';
import { Route, NavLink, Switch } from "react-router-dom";
import AboutUs from "./AboutUs.js";
import Home from "./Home.js";
import Users from "./Users.js";
import Nav from "./Nav.js";
import Footer from "./Footer.js";

export default class Layout extends React.Component {

  render () {
    const { location } = this.props;

    return (
      <div>
        <div className="container">
            <Nav location={location} />
            <Route exact path='/' component={Home} />
            <Route path='/aboutUs' component={AboutUs} />
            <Route path='/users' component={Users} />
            <Footer />
        </div>
      </div>
    )
  }
}

