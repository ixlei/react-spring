'use strict';

import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

class ReservationSidenav extends Component {
  render() {
  	return (<ul id="sidebar">
      <li className="sidebarItem">
        <Link to="company/reservation/current">当前预约</Link>
      </li>
      <li className="sidebarItem">
        <Link to={"company/reservation/finsh"}>已完成预约</Link>
      </li>
    </ul>
   )
  }
}

export default ReservationSidenav;