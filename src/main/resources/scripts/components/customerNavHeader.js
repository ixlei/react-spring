'use strict';

import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import ListItem from './ListItem';

export default class Nav extends Component {
 	constructor(props) {
 		super(props);
 	}

 	renderLogo() {
 		return (
			<div id="nav-logo">
		        <span>
		            <img src={this.props.logoUrl} id="logo" /> 
		        </span>
	        </div>
 		);
 	}

 	renderGoList() {
 		console.log(this.props.activeIndex.index);
 		let activeIndex = 0;
 		return (
 			<div id="nav-list">
		      <ul>
		      	{this.props.goList.map((list, index) =>(
	      		<li key={list.addr}>
	      			<Link to={list.addr + '/' + index}>
	      				<span className=
	      				{parseInt(this.props.activeIndex.index) === index 
	      					? 'nav-item active' : 'nav-item'}>
	      				{list.text}</span>
	      			</Link>
	      			{(() =>{
	      				if(Object.is(3, index)) {
	  					return (<div id="service-subnav">
							<ListItem list = {this.props.subNav} />
						</div>)
	      				}
	      			})()
	      		}
	      		</li>
		      	))
		    }
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
 			<div id="header">
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

