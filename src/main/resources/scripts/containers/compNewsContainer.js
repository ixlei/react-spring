'use strict';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import CompNews from '../components/compNews';

class CompNewsContainer extends Component {
  render() {
  	return (<CompNews {...this.props} />);
  }
}

function mapStateToProps(state) {
  let {compNews} = state;
  let {number, increaseRate: rate, capital: {dataSet, tipsColor}} = compNews;
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
	count: number,
	dataSet,
	tipsColor
  };
}

export default connect(mapStateToProps)(CompNewsContainer);