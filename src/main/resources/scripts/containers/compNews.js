'use strict';

import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {fetchCompanyNews} from '../actions/fetchCompany';
import CountScroll from '../components/countScroll';
import IncreaseRate from '../components/increaseRate';

class CompNewsContainer extends Component {
    componentDidMount() {
      const { dispatch} = this.props;
      dispatch(fetchCompanyNews());
    }

	render() {
	  let {rate, count} = this.props;
	  return (<div id="data-show">
	    <div id="reg-num">
		  <p className="data-show--title">当前注册企业总数</p>
	    　<div id="num-show">
		  　<CountScroll count={count} />
		    <span>家</span>
		　</div>
		</div>
		<div id="rise-speed">
		  <p className="data-show--title">注册企业增长情况</p>
		  <div id="show-area">
			<IncreaseRate rate={rate}/>
		  </div>
		</div>
		<div id="circle">
		  <div id="circle-data">
		  </div>
		</div>
	  </div>
	  )
	}
}


function mapStateToProps(state) {
  let {compNews} = state;
  let {number, increaseRate: rate} = compNews;

  return {
     rate: [{
			time: '近一周',
			iconUrl: 'arrow1.png',
			rate: rate[0]
		}, {
			time: '近一月',
			iconUrl: 'arrow2.png',
			rate: rate[1]
		}, {
			time: '近一季',
			iconUrl: 'arrow3.png',
			rate: rate[2]
		}],
	count: number
  }
}

export default connect(mapStateToProps)(CompNewsContainer);