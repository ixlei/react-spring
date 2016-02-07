'use strict';

import React, {Component, PropTypes} from 'react';
import InfoPubNav from '../components/infoPubNav';
import {Link} from 'react-router';
import {activeIndex} from '../actions/navHeader';
import FormSearch from './FormSearch';

class CompanyUserNews extends Component {

  componentDidMount() {
  	const {dispatch, params: {index}} = this.props;
    dispatch(activeIndex(parseInt(index)));
  }
  
  componentWillUnmount() {
    const {dispatch} = this.props;
    dispatch(activeIndex(-1));
  }
  
  renderNewsNav() {
    return (<div id="sidebarContainer">
      <p id="sidebarTitle">我的消息</p>
      <InfoPubNav />
     </div>
    )
  }
  
  render() {
  	return (<div id="content">
      {this.renderNewsNav()}
      <div className="main-cla fl">
      <div className="main_head">
        <p>中心公告</p>
        <FormSearch />
      </div>
      {this.props.children}
      </div>
  	 </div>
  	)
  }
}

export default CompanyUserNews;


