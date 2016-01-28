'use strict';

import React, {Component, PropTypes} from 'react';
import ReleaseDebtLeftNav from './releaseDebtLeftNav';
import {activeIndex} from '../actions/navHeader';
import {fetchUser} from '../actions/user';

export default class DebtPub extends Component {
   
   componentDidMount() {
  	const {dispatch, params: {index}} = this.props;
  	dispatch(activeIndex(parseInt(index)));
  	dispatch(fetchUser());
  }

   renderLeftNav() {
  	return (
  	  <div id="list">
        <p id="list-title">意向发布</p>
        <ReleaseDebtLeftNav />
      </div>
  	)
  }

  rederUserInfo() {
  	const {userInfo} = this.props;
    return (<div>
      <p className="body_title">基本信息</p>
      <div className="first">
        <p>姓名：{userInfo.username}</p>
        <p>所在地区：{userInfo.companyAddress}</p>
        <p>产品类型：股权投资</p>
      </div>
      <div className="first">
        <p>投资地区：{userInfo.investorAddress}</p>
        <p>资金主体：{userInfo.legalRepresentative}</p>
        <p>投资行业：{userInfo.investFiled}</p>
      </div>
     </div>
    )
  }

  render() {
  	return (<div id="main_body_m">
  	  {this.renderLeftNav()}
  	  <div id="swap">
  	    {this.rederUserInfo()}
  	    {this.props.children}
  	  </div>
  	</div>
  	)
  }
}

DebtPub.propTypes = {
  userInfo: PropTypes.object.isRequired
}