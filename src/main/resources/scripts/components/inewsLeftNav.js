'use strict';

import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

export default class InewsLeftNav extends Component {
  render() {
  	return (<div id="listContent">
	  <ul id="sidebar">
		<li className="sidebarItem">
		  <Link to={"/investor/inews"} className="sidebarItem">系统信息</Link>
		</li>
		<li className="sidebarItem">
		  <Link to={"/investor/privateNews"} className="sidebarItem">私信</Link>
		</li>
		<li className="sidebarItem">
		  <Link to={"/investor/directionDown"}
		  className="sidebarItem">定向披露</Link>
		</li>
	  </ul>
    </div>
    )
  }
}