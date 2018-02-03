import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from "../actions/userActions.js";
import UserThumbnail from "./UserThumbnail.js";
import UserModal from "./UserModal.js";

class Users extends React.Component {
	constructor(){
	    super();
	    this.state = {
	      collapsed: false
	    }
	}
  	componentWillMount() {
        console.log('componentWillMount User');
        this.props.dispatch(fetchUser());
	}
	componentDidUpdate() {
		console.log('componentDidUpdate User');
	}
	componentWillReceiveProps () {
		console.log('componentWillReceiveProps  User');
		console.log(this);
	}
	componentWillUpdate() {
		console.log('componentWillUpdate User');
	}
	componentDidUpdate() {
		console.log('componentDidUpdate User');
	} 
	handleCollapse (modalState, user) {
		this.setState({...this.state,collapsed:modalState,editUser: user});
	}
	handleUpdates (field, value) {
		var editUser = this.state.editUser;
		var fields = field.split('.');	
		if (field.indexOf('.') > 0) {
			editUser[fields[0]][fields[1]] = value;
		} else {
			editUser[field] = value;
		}
		this.setState({...this.state,editUser});
	}
	onUpdateUserData () {
		console.log('On UPDATE USER DATA');
		var userList = this.props.userList;
		const user = this.state.editUser;
		for (var i =0 ; i< userList.length; i++) {
			if (userList[i].id == user.id) {
				userList[i] = user;
			}
		}
		this.setState({...this.state, collapsed:false});
	}
    render() {
 	    return (
	 	   	<div>
			   	<UserThumbnail 
			   		userItems={this.props.userList || []} 
			   		onCollapseTrigger= {this.handleCollapse.bind(this)} />
		        <UserModal fadeIn={this.state.collapsed ? "in":''} 
	      		    editUser = {this.state.editUser} 
	      			onFieldUpdate = {this.handleUpdates.bind(this)}
	      			onUpdateUser = {this.onUpdateUserData.bind(this)}
	      		 	onToggleModalState = {this.handleCollapse.bind(this)} />
		    </div>
	    );
    }
}

const mapStateToProps = (store) => ({
    userList: store.user.user
});
export default connect(mapStateToProps)(Users);