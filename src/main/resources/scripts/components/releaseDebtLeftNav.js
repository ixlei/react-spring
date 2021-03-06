'use strict';

import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

export default class ReleaseDebtLeftNav extends Component {
  render() {
  	return (<div id="list-item">
	  <span>
		<Link to={'/investor/pub/render'}>股权收购</Link>
	  </span> 
	  <span id="selected">
	    <Link to={'/investor/pub/debt'}>债权购买</Link>
	  </span>
    </div>
  	)
  }
}