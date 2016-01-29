'use strict';

import React, {Component, PropTypes} from 'react';
import InewsLeftNav from './inewsLeftNav';
import AdminNews from './adminNews';
import {Link} from 'react-router';
import {fetchInews} from '../actions/news';

export default class Inews extends Component {
  
  componentDidMount() {
  	const {dispatch} = this.props;
  	dispatch(fetchInews());
  }

  renderLeftNav() {
  	return (<div id="sidebarContainer">
	  <p id="sidebarTitle" className="sidebarItem">我的消息</p>
      <InewsLeftNav />
     </div>
  	)
  }

  renderSearch() {
  	return (<div id="searchForm">
      <input type="search" name="search" />
      <input type="submit" value="搜索" />
	 </div>
	)
  }

  render() {
    const {inews} = this.props;
  	return (
  	  <div id="inews-main">
  	  {this.renderLeftNav()}
  	  {this.renderSearch()}
  	  <AdminNews inews={inews}/>
  	  </div>
  	)
  }
}

Inews.propTypes = {
  inews: PropTypes.array.isRequired
}