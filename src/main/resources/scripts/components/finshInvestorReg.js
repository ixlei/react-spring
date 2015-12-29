'use strict';

import React, {Component, ProTypes} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {regStep} from '../actions/reg';

require('../../styles/finish-reg.scss');

class FinshInvestorReg extends Component {
  componentDidMount() {
    const {dispatch} = this.props;
    dispatch(regStep(2));
  }

  render() {
  	return (
  	  <div id="content">
        <div id="glance">
	        <div id="tips">
	            <p>恭喜你,已完成注册</p>
	        </div>
	        <div id="finsh-tips">
	            <img src="/images/finsh-face.png" />
	        </div>
            <div id="go">
	            <ul>
	                <li>
	                    <span className="go-item" id="item1">前去完善信息</span>
	                </li>
	                <li>
	                    <span className="go-item" id="item2">以后再完善,<Link to={"/investor/index"}>去首页看看</Link></span>
	                </li>
	            </ul>
            </div>
        </div>
      </div>
  	)
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(FinshInvestorReg)