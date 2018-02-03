import React from "react";
import ReactDOM from "react-dom";
import { NavLink } from "react-router-dom";

export default class Nav extends React.Component {
  constructor(){
    super();
    this.state = {
      collapsed: true
    }
  }
  toggleClass(){
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }

  render() {
    const { collapsed } = this.state;
    const { pathname } = this.props.location;
    const navClass = collapsed ? "collapse":'';
    const dashboardClass = pathname === '/' ? 'active':'';
    const aboutUsClass = pathname.match(/^\/aboutUs/) ? 'active':'' ;
    const usersClass = pathname.match(/^\/users/) ? 'active':'' ;
    return (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" onClick={this.toggleClass.bind(this)} data-toggle="collapse" data-target="#navbarContent" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>

          <div className= {"navbar-collapse " +navClass} id="navbarContent">
            <ul className="nav navbar-nav">
              <li className={dashboardClass}> <NavLink to='/' onClick={this.toggleClass.bind(this)}>Home</NavLink></li>
              <li className={aboutUsClass}> <NavLink to='/aboutUs' onClick={this.toggleClass.bind(this)}>About Us</NavLink></li>
              <li className={usersClass}> <NavLink to='/users' onClick={this.toggleClass.bind(this)}>Users</NavLink></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
