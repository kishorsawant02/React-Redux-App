import React from 'react';

export default class UserThumbnail extends React.Component {
    toggleClass(user, event){
	    this.props.onCollapseTrigger(true, JSON.parse(JSON.stringify(user)));
	}
	render() {
	    const users = this.props.userItems || [];
	    console.log('render Users UserThumbnail');
	    return (
	    	<div className="row">
			  	{
			  		users.map((user, index)=>
					    <div className="col-xs-12  col-sm-6 col-md-4"  key={user.id}>
					  		<div className="panel panel-info text-center" onClick={this.toggleClass.bind(this, user)}> 
					  			<div className="panel-heading"> 
					  				<h4 className="panel-title">{user.name}</h4>
					  			</div>
					  			<div className="panel-body"> 
					  				<p> {user.email} </p>
					  				<p> {user.address && user.address.city} </p>
					  				<p>{user.phone}</p>
							  		<p> {user.website} </p>
							  		<p>{user.company.name}</p>
					  			</div>
					  		</div>
					    </div>
			  		)
				}
		    </div>
	    );
	  }
}
