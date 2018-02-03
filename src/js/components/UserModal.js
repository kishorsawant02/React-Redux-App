import React from 'react';

export default class UserModal extends React.Component {
    constructor(){
	    super();
	    this.state = {
	    	user:{
		      	id: '',
		      	name: '',
		      	address: {
		      		city :''
		      	},
		      	phone: '',
		      	email: '',
		      	company: {
		      		name : ''
		      	},
		      	website: ''
	      }
	    }
	}
    toggleModalState () {
  	   this.props.onToggleModalState(false);
    }
    componentWillMount() {
        console.log('componentWillMount Users Modal');
	}
	componentDidUpdate() {
		console.log('componentDidUpdate Users Modal');
	}
	componentWillReceiveProps () {
		console.log('componentWillReceiveProps Users Modal');
	}
	componentWillUpdate() {
		console.log('componentWillUpdate Users Modal');
	}
	componentDidUpdate() {
		console.log('componentDidUpdate Users Modal');
	} 
    handleChange(field, event) {
 	   	this.props.onFieldUpdate(field, event.target.value);
    }
    saveUpdatedData() {
 	   	this.props.onUpdateUser();
    }
    render() {
    	console.log('render Users Modal');
	  	var showModal = {
	      	display: 'block'
	  	};
	  	var hideModal = {
	      	display: 'none'
	  	};
	  	const user =  this.props.editUser || this.state.user;
	  	const fadeIn = this.props.fadeIn || '';
	    return (
	        	<div id="myModal" className={"modal fade " +fadeIn} role="dialog" style={fadeIn? showModal:hideModal}>
				  <div className="modal-dialog">
				    <div className="modal-content">
				      <div className="modal-header">
				        <button type="button" className="close" data-dismiss="modal" onClick={this.toggleModalState.bind(this)}>&times;</button>
				        <h4 className="modal-title">Edit User Details</h4>
				      </div>
				      <div className="modal-body row">
					        <div className="row col-xs-offset-1">
					        	<span className="col-xs-3">
						        Name</span> <span className="col-xs-8">
						        <input type="text" value={user.name} onChange={this.handleChange.bind(this, 'name')} />
					        	</span>
					        </div>
					        <div className="row col-xs-offset-1">
					        	<span className="col-xs-3">
						        email</span><span className="col-xs-8">
						        <input type="text" value={user.email} onChange={this.handleChange.bind(this, 'email')} />
					        	</span>
					        </div>
					        <div className="row col-xs-offset-1">
					        	<span className="col-xs-3">
						        City</span><span className="col-xs-8">
						        <input type="text" value={user.address.city} onChange={this.handleChange.bind(this, 'address.city')} />
					        	</span>
					        </div>
					        <div className="row col-xs-offset-1">
					        	<span className="col-xs-3">
						        Phone</span><span className="col-xs-8">
						        <input type="text" value={user.phone}  onChange={this.handleChange.bind(this, 'phone')} />
					        	</span>
					        </div>
					        <div className="row col-xs-offset-1">
					        	<span className="col-xs-3">
						        Website</span><span className="col-xs-8">
						        <input type="text" value={user.website} onChange={this.handleChange.bind(this, 'website')} />
					        	</span>
					        </div>
					        <div className="row col-xs-offset-1">
					        	<span className="col-xs-3">
						        Company</span><span className="col-xs-8">
						        <input type="text" value={user.company.name} onChange={this.handleChange.bind(this, 'company.name')} />
					        	</span>
					        </div>
				      </div>
				      <div className="modal-footer">
				         <button type="button" className="btn btn-default" onClick={this.toggleModalState.bind(this)}>Close</button>
				     	 <button type="button" className="btn btn-success" onClick={this.saveUpdatedData.bind(this)}>Save</button>
				      </div>
				    </div>
					</div>
				</div>
	    );
    }
}
