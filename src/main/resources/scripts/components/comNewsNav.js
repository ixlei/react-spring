'use strict';

import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

class ComNewsNav extends Component {
  render() {
  	return (<ul id="sidebar">
  	  <li className="sidebarItem">
        <Link to={"company/inews"}>
          系统信息
        </Link>
      </li>
      <li className="sidebarItem">
        <Link to={"company/privateNews"}>
          私信
        </Link>
      </li>
      <li className="sidebarItem">
        <Link to={"company/directionDown"}>
          定向披露
        </Link>
      </li>
     </ul>
    )
  }
}

export default ComNewsNav;