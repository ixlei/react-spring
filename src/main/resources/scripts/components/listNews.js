'use strict';

import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

export default class ListNews extends Component {
  render() {
  	return (
  	  <div className="zixun-item">
  	    {this.props.news.map((item, index) => (
  	      <p key={'news' + item.nid}>
  	        <Link to={'/getComNews/' + item.nid} title={item.title}>{item.title}</Link>
  	      </p>
  	    ))}
  	  </div>
  	)
  }
}

ListNews.propTypes = {
  news: PropTypes.array.isRequired
}