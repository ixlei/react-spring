'use strict';

import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

export default class SocketManageSiteNav extends Component {
  render() {
  	const {curActive} = this.props;
  	return (
  	  <div id="nav">
        <span id="tab1" className={curActive === 'invest' ? 'curentActive' : '' }>
			<Link to={"/investor/manage/invest"}>投资概况</Link>
		</span>
		<span id="tab2" className={curActive === 'stockManage' ? 'curentActive' : '' }>
		  <Link to={"/investor/manage/stockManage"}>股权管理</Link>
		</span>
		<span id="tab3" className={curActive === 'stockRightManage' ? 'curentActive' : '' }>
		  <Link to={"/investor/manage/stockRightManage"}>债权管理</Link>
		</span>
		<span id="search">
		  <form>
		    <label for="search-content">搜索:</label> 
		    <input type="text" id="search-content"> 
		    <input type="button" id="search-button" value="搜索">
		  </form>
		</span>
      </div>
  	)
  }
}

SocketManageSiteNav.propTypes = {
  curActive: PropTypes.string.isRequired
}