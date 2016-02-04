'use strict';

import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import UnsliderContainer from '../containers/unsliderContainer';
import {activeIndex} from '../actions/navHeader';

class BusinessService extends Component {
	
  componentDidMount() {
  	const {dispatch, params: {index}} = this.props;
    dispatch(activeIndex(parseInt(index)));
  }

  componentWillUnmount() {
  	const {dispatch} = this.props;
  	dispatch(activeIndex(-1));
  }

  renderManagement() {
  	return (<div id="item-management">
	  <p className="title">资产管理</p>
	  <p className="item-describe">
		可为单一客户提供定向资产管理服务<br /> 
		为多个用户办理集合资产管理业务 <br /> 
		为客户特定目的办理专项资产管理业务
	  </p>
	  <div className="other">
		<span>
		  <Link to={"/customer/assetgo"}>了解更多</Link>
		</span>
		<span>
		  <Link to={"/customer/servicego"}>去管理 </Link>
		</span>
	  </div>
     </div>
   )
  }

  renderEsignature() {
  	return (<div id="item-esignature">
	  <p className="title">电子签约</p>
	  <p className="item-describe">
		自动化线上交易 <br />
		通过业务洽谈，协商协议具体内容 <br /> 
		依托数字认证，时间戳认证，完成线上交易
	  </p>
	  <div className="other">
		<span>
		  <Link to={"/customer/assetgo"}>了解更多</Link>
		</span>
		<span>
		  <Link to={"/customer/login"}> 去签约 </Link>
		</span>
	  </div>
    </div>
   )
  }

  render() {
    return (<div>
      <unsliderContainer />
      <div id="service-item">
       {this.renderManagement()}
       {this.renderEsignature()}
      </div>
     </div>
    )
  }
}

export default BusinessService;