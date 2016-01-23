'use strict';

import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

export default class NewsLeftNav extends Component {
  render() {
    return (<div className="list">
      <ul>
		<li className="left-nav">
		  <Link to={"/investor/news/2/infoCenter"}>中心公告</Link>
		</li>
		<li className="left-nav">
		  <Link to={"/investor/news/2/privateDebtList"}>私募债券列表</Link>
		</li>
		<li className="left-nav">
		  <Link to={"/investor/news/2/infoRecords"}>备案发行报告</Link>
		</li>
		<li className="left-nav">
		  <Link to={"/investor/news/2/infoTransform"}>转让交易报告</Link>
		</li>
		<li className="left-nav">
		  <Link to={"/investor/news/2/infoRegular"}>定期报告</Link>
		</li>
		<li className="left-nav">
		  <Link to={"/investor/news/2/infoTemporary"}>临时报告</Link>
		</li>
		<li className="left-nav">
		  <Link to={"/investor/news/2/infoCredit"}>信用报告</Link>
		</li>
	  </ul>
    </div>
    )
  }
}