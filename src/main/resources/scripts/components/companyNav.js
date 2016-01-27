'use strict';

import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import Logo from './logo';

export default class CompanyNav extends Component {
  renderGoList() {

  	let getClass = indexAdd => {
  	  const {index} = this.props;
  	  indexAdd = parseInt(indexAdd);
  	  let currIndex = parseInt(index);
  	  return indexAdd === currIndex 
  	    ? 'nav-item active'
  	    : 'nav-item';
  	}

  	return (<div id="nav-list">
      <ul>
        <li>
	      <Link to={"/company/index/0"}>
	        <span className={getClass(0)}>首页</span>
	      </Link>
        </li>
        <li id="finance">
          <Link to={"/company/corporateModel/1"}>
            <span className={getClass(1)}>融资板块</span>
          </Link>
          <div id="finance-subnav">
            <ul>
              <li>
                <Link to={"/company/corporateModel"}>
                  <span>撮合配对</span>
                </Link>
               </li>
               <li>
                  <Link to={"/company/financepublish"}>
                    <span>意向发布</span>
                  </Link>
                </li>
                <li>
                  <Link to={"/company/chat"}>
                    <span>业务洽谈</span>
                  </Link>
                </li>
                <li>
                  <Link to={"/company/appliedCompany"}>
                    <span>电子签约</span>
                  </Link>
                </li>
            </ul>
          </div>
        </li>
        <li>
          <Link to={"/company/infoPublish/2"}>
            <span className={getClass(2)}>信息发布</span>
          </Link>
        </li>
        <li id="service">
          <Link to={"/company/manage/3"}>
            <span className={getClass(3)}>资产管理</span>
          </Link>
        </li>
      </ul>
    </div>
  	)
  }

  renderUser() {
  	return (<div id="iciti">
      <ul id="i-column">
	    <li id="user-photo">
	      <span>
    		<a href="_target">
    		  <img src="/images/user.png"/>
        	</a>
	      </span>
	    </li>
	    <li id="cgo">
	      <span id="text">我的账号<img src="/images/back-bottom.png" /></span>
	        <ul>
	          <li>
                <Link to={"/company/ifollow"}>
                  <span>我关注的</span>
                </Link>
	          </li>
	          <li>
                <Link to={"/company/inews"}>
                  <span>我的消息</span>
                </Link>
	          </li>
	          <li>
                <Link to={"/company/currentReservation"}>
                  <span>预约管理</span>
                </Link>
	          </li>
	          <li>
                <Link to={"/company/isource"}>
                  <span>资料管理</span>
                </Link>
	          </li>
	          <li>
                <Link to={"/company/logout"}>
                  <span>退出</span>
                </Link>
	          </li>
	        </ul>
	    </li>
	  </ul>
    </div>
   )
  }

  render() {
  	return (<div id="company-header">
      <div id="header-nav">
       <Logo />
       {this.renderGoList()}
       {this.renderUser()}
      </div>
     </div>
    )
  }
}

CompanyNav.propTypes = {
  index: PropTypes.number.isRequired
}