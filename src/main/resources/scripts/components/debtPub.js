'use strict';

import React, {Component, PropTypes} from 'react';
import ReleaseDebtLeftNav from './releaseDebtLeftNav';
import {activeIndex} from '../actions/navHeader';
import {fetchUser} from '../actions/user';

export default class DebtPub extends Component {
   
   componentDidMount() {
  	const {dispatch} = this.props;
  	dispatch(activeIndex(1));
  	dispatch(fetchUser());
  }

   renderLeftNav() {
  	return (
  	  <div id="list">
        <div id="list-title">
          <span>意向发布</span>
        </div>
        <ReleaseDebtLeftNav />
      </div>
  	)
  }

  rederUserInfo() {
  	const {userInfo} = this.props;
    return (<div>
      <div className="body_title">
        基本信息
      </div>
      <div className="first">
        <p >
          姓名：{userInfo.username}<br/>
          所在地区：{userInfo.companyAddress}<br/>
          产品类型：股权投资<br/>
        </p>
      </div>
      <div className="first">
        <p >
          投资地区：{userInfo.investorAddress}<br/>
          资金主体：{userInfo.legalRepresentative}<br/>
          投资行业：{userInfo.investFiled}<br/>
        </p>
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