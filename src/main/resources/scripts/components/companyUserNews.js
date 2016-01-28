'use strict';

import React, {Component, PropTypes} from 'react';
import InfoPubNav from '../components/infoPubNav';
import {Link} from 'react-router';
import {activeIndex} from '../actions/navHeader';

class CompanyUserNews extends Component {

  componentDidMount() {
  	const {dispatch, params: {index}} = this.props;
    dispatch(activeIndex(parseInt(index)));
  }

  renderNewsNav() {
    return (<div id="sidebarContainer">
      <p id="sidebarTitle">我的消息</p>
      <InfoPubNav />
     </div>
    )
  }

  renderSearch() {
  	return (<div id="searchForm">
      <input type="search" name="search" />
      <input type="submit" value="搜索" />
    </div>
    )
  }
  
  render() {
  	return (<div className="main">
      {this.renderNewsNav()}
      <div className="main-cla fl">
      <div className="main_head">
        <p>中心公告</p>
        {this.renderSearch()}
      </div>
      {this.props.children}
      </div>
  	 </div>
  	)
  }
}

export default CompanyUserNews;


