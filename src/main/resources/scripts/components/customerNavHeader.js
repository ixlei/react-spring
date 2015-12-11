'use strict';

import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import ListItem from './ListItem';

class Nav extends Component {
 	constructor(props) {
 		super(props);
 	}

 	renderLogo() {
 		return (
 			<div>
 				<div id="nav-logo">
                    <span>
                        <img src={this.props.logoUrl} alt="" id="logo" /> 
                    </span>
     	        </div>
 			</div>
 		);
 	}

 	renderGoList() {
 		return (
 			<div id="nav-list">
		      <ul>
		      	{this.props.goList.map((list, index) =>{
	      		<li key={list.addr}>
	      			<Link to={'/rs/' + this.props.userType + '/' + list.addr}>
	      				<span className=
	      				{Object.is(this.props.activeIndex, index) 
	      					? 'nav-item active' : 'nav-item'}>
	      				{list.text}</span>
	      				if(Object.is(3, index)) {
	      					<div id="service-subnav">
								<ListItem list = {this.props.subNav} />
							</div>
	      				}
	      			</Link>
	      		</li>
		      	})}
	        </ul>
		</div>
 		);
 	}

 	renderLogin() {
 		return (
 			<div id="nav-login">
 				<ListItem list= {this.props.loginList} />
 			</div>
 		);
 	}

 	render() {
 		return (
 			<div id="header-nav">
 				<div id="header-nav">
 					{this.renderLogo()}
 					{this.renderGoList()}
 					{this.renderLogin()}
 				</div>
 			</div>
 		);
 	}
 }

Nav.PropTypes = {
	logoUrl: PropTypes.string.isRequired,
	goList: PropTypes.array.isRequired,
	subNav: PropTypes.array.isRequired,
	loginList: PropTypes.array.isRequired,
	activeIndex: PropTypes.number.isRequired,
	userType: PropTypes.oneOf(['customer', 'investor', 'company'])
}

export {Nav as default}
