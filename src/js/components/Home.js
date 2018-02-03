import React from 'react';
import { NavLink } from "react-router-dom";


export default class Home extends React.Component {
  render() {
  const img_container_style = {
    display:'inline',
    height : 350,
    width: 350
  };
    return (
      <div>
        <div className="container-fluid bg-1 text-center">
          <h3 className="margin">I'm an adventurer</h3>
          <img src="https://www.w3schools.com/bootstrap/bird.jpg" alt={"Bird"} className="img-responsive img-circle margin " style={img_container_style}  />
        </div>
        <div className="container-fluid bg-2 text-center">
          <h3>
            <NavLink to='/users'>
              <div className="btn btn-default btn-lg margin">
                <span className="glyphicon glyphicon-search"></span> Search User
              </div>
            </NavLink>
          </h3>
          <h3 className="margin">Little Insides </h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        </div>
      </div>
    );
  }
}
