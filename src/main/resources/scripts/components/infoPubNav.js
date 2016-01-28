'use strict';

import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

class InfoPub extends Component {
  render() {
    return (<div className="list">
	 <ul>
	  <li className="left-side-nav">
	    <Link to={"/company/infoPublish"}>中心公告</Link>
	  </li>
	  <li className="left-side-nav">
	    <Link to={"/company/privateList"}>私募债券列表</Link>
	  </li>
	  <li className="left-side-nav">
	    <Link to={"/company/creditRelease"}>信用监管报告</Link>
	  </li>
	  <li className="left-side-nav">
	    <Link to={"/company/ipublish"}>我要发布</Link>
	  </li>
	 </ul>
   </div>
   )
  }
}

export default InfoPub;