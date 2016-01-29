'use strict';

import React, {Component, PropTypes} from 'react';
import ReservationSidenav from './reservationSidenav';
import FormSearch from './FormSearch';
import FormSelect from './FormSelect';

class Reservation extends Component {
  
  renderSideNav() {
  	return (<div id="sidebarContainer">
  	  <p className="sidebarItem">预约管理</p>
      <ReservationSidenav />
    </div>
   )
  }
  
  renderSelect() {

    const options = [{
      value: '预约方', 
      text: '预约方'
      }, {
       value: '联系方式',
       text: '联系方式'
     }, {
     	value: '预约时间',
     	text: '预约时间'
     }, {
     	value: '预约提交时间',
     	text: '预约提交时间'
     }
    ];

  	return (<div id="selectForm">
  	  <form>
        <FormSelect name="select" labelText="查询" options={options} />
      </form>
  	 </div>
  	)
  }

  render() {
    return (<div id="mainContainer">
     <div id="main-c">
      {this.renderSideNav()}
      <div id="mainContent">
       <FormSearch />
       {this.renderSelect()}
       {this.props.children}
       </div>
      </div>
     </div>
    )
  }
}

export default Reservation;