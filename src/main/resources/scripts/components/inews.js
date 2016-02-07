'use strict';

import React, {Component, PropTypes} from 'react';
import InewsLeftNav from './inewsLeftNav';
import AdminNews from './adminNews';
import {Link} from 'react-router';
import {fetchInews} from '../actions/news';
import FormSearch from './FormSearch';

export default class Inews extends Component {
  
  componentDidMount() {
  	const {dispatch} = this.props;
  	dispatch(fetchInews());
  }

  renderLeftNav() {
  	return (<div id="sidebarContainer">
	    <p id="sidebarTitle">我的消息</p>
      <InewsLeftNav />
     </div>
  	)
  }

  render() {
    const {inews} = this.props;
  	return (
  	  <div id="content">
  	  {this.renderLeftNav()}
  	  <FormSearch />
  	  <AdminNews inews={inews}/>
  	</div>
  	)
  }
}

Inews.propTypes = {
  inews: PropTypes.array.isRequired
}