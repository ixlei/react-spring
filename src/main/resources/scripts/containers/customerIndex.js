'use strict';

import React, {Component, PropTypes} from 'react';
import UnsliderContainer from './unsliderContainer';
import CountScrollContainer from './countScrollContainer';
import IncreateRateContainer from './increaseRateContainer';
import InvestorTitle from '../components/investorTitle';

require('../../styles/customerIndex.scss');

export default class CustomerIndex extends Component {
	render() {
		return (
			<div id="content">
				<UnsliderContainer />
				<div id="data-show">
				  <div id="reg-num">
					<p className="title">当前注册企业总数</p>
					<p id="num-show">
						<CountScrollContainer /><span>家</span>
					</p>
				  </div>
				  <div id="rise-speed">
				    <div className="title">
						<p>注册企业增长情况</p>
						<div id="show-area">
						  <IncreateRateContainer />
						</div>
					</div>
				  </div>
				  <div id="circle">
				    <div id="circle-data"></div>
				    <div id="circle-image"></div>
				  </div>
				</div>
				<div id="invest-center">
				  <p id="inv-title">投资中心</p>
				  <InvestorTitle />
				</div>
			</div>
		)
	}
}