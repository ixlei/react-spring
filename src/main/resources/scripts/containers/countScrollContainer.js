'use strict';

import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import CountScroll from '../components/countScroll';

class CountScrollContainer extends Component {
	render() {
		return (
			<CountScroll {...this.props} />
		)
	}
}

function mapStateToProps(state) {
    return {
    	count:6276
    }
}

export default connect(mapStateToProps)(CountScrollContainer)