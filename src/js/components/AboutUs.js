import React from 'react';

export default class AboutUs extends React.Component {
  render() {
    const img_container_style = {
	    width: '100%'
	}
    return (
      <div>
        <div className="container-fluid bg-3 text-center">    
		  <h3 className="margin">Lorem ipsum dolor?</h3><br />
		  <div className="row">
		    <div className="col-sm-4">
		      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
		      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
		      <img src="https://www.w3schools.com/bootstrap/birds1.jpg" className="img-responsive margin" style={img_container_style} alt="Image" />
		    </div>
		    <div className="col-sm-4"> 
		      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
		      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
		      <img src="https://www.w3schools.com/bootstrap/birds2.jpg" className="img-responsive margin" style={img_container_style} alt="Image" />
		    </div>
		    <div className="col-sm-4"> 
		      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
		      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
		      <img src="https://www.w3schools.com/bootstrap/birds3.jpg" className="img-responsive margin" style={img_container_style} alt="Image" />
		    </div>
		  </div>
		</div>
      </div>
    );
  }
}
