'use strict';

import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import ListItem from './ListItem';
import Logo from './logo';

export default class Nav extends Component {

 	renderGoList() {
	    let activeIndex = 0;
		return (
			<div id="nav-list">
	      <ul>
	      	{this.props.goList.map((list, index) =>(
      		<li key={list.addr}>
      			<Link to={'customer/' + list.addr + '/' + index}>
      				<span className=
      				{parseInt(this.props.activeIndex.index) === index 
      					? 'nav-item active' 
      					: 'nav-item'}>
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
		  <Logo />
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

