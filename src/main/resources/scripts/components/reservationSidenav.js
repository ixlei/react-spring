'use strict';

import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

class ReservationSidenav extends Component {
  render() {
  	return (<ul id="sidebar">
      <li className="sidebarItem">
        <Link to="company/currentReservation">当前预约</Link>
      </li>
      <li className="sidebarItem">
        <Link href="company/finishedReservation">已完成预约</Link>
      </li>
    </ul>
   )
  }
}

export default ReservationSidenav;