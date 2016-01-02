'use strict';

import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import UnsliderContainer from './unsliderContainer';
import InvestorTitle from '../components/investorTitle';
import CompNewsContainer from './compNews';
import CountScrollContainer from './countScrollContainer';
import IncreateRateContainer from './increaseRateContainer';
import NewsConatiner from './listNewsContainer';
import {activeIndex} from '../actions/navHeader';

require('../../styles/customerIndex.scss');

class CustomerIndex extends Component {
	componentDidMount() {
      const {dispatch} = this.props;
      dispatch(activeIndex(this.props.params.index))
	}

	render() {
	  return (
	    <div id="content">
	      <UnsliderContainer />
		  <CompNewsContainer />
		  <div id="invest-center">
			<p id="inv-title">投资中心</p>
			<InvestorTitle />
		  </div>
		  <div id="news">
			<p id="zixun">资讯</p>
			<NewsConatiner />
		  </div>
		</div>
	  )
   }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(CustomerIndex);