'use strict';

import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

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
         <Link to={"/company/pub/finance/1"}>私募股权</Link>
        </li>
	    <li className="side-item">
	      <Link to={"/company/pub/raisedbonds/1"}>私募债</Link>
	    </li>
	   </ul>
	  </div>
     </div>
    )
  }
}