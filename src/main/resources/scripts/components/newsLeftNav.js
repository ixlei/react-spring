'use strict';

import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

export default class NewsLeftNav extends Component {
  render() {
    return (<div className="list">
      <ul>
		<li className="left-nav">
		  <Link to={"/investor/news/:infoCenter"}>中心公告</Link>
		</li>
		<li className="left-nav">
		  <Link to={"/investor/news/:privateDebtList"}>私募债券列表</Link>
		</li>
		<li className="left-nav">
		  <Link to={"/investor/news/:infoRecords"}>备案发行报告</Link>
		</li>
		<li className="left-nav">
		  <Link to={"/investor/news/:infoTransform"}>转让交易报告</Link>
		</li>
		<li className="left-nav">
		  <Link to={"/investor/news/:infoRegular"}>定期报告</Link>
		</li>
		<li className="left-nav">
		  <Link to={"/investor/news/:infoTemporary"}>临时报告</Link>
		</li>
		<li className="left-nav">
		  <Link to={"/investor/news/:infoCredit"}>信用报告</Link>
		</li>
	  </ul>
    </div>
    )
  }
}