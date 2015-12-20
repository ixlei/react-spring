'use strict';

import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import IncreaseRate from '../components/increaseRate';

class IncreaseRateContainer extends Component {
	render() {
		return (
			<IncreaseRate {...this.props} />
		)
	}
}

function mapStateToProps(state) {
	return {
		rate: [{
			time: '近一周',
			iconUrl: 'arrow1.png',
			rate: 13
		}, {
			time: '近一月',
			iconUrl: 'arrow2.png',
			rate: 13
		}, {
			time: '近一季',
			iconUrl: 'arrow3.png',
			rate: 13
		}]
	}
}

export default connect(mapStateToProps)(IncreaseRateContainer);