'use strict';

import React, {Component, PropTypes} from 'react';
import {Link} form 'react-router';

export default class FinancePubNav extends Component {
  render() {
  	return (<div className="finance-pub-nav">
	  <div className="title">
	    <p>意向发布</p>
	  </div>
	  <div className="tri"></div>
	  <div className="tri1"></div>
	  <div className="list">
	   <ul>
        <li className="side-item">
         <Link to={"/company/financepublish"}>私募股权</Link>
        </li>
	    <li className="side-item">
	      <Link to={"/company/raisedbonds"}>私募债</Link>
	    </li>
	   </ul>
	  </div>
     </div>
    )
  }
}