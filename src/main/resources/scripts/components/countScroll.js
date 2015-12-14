'use strict';

import React, {Component, PropTypes} from 'react';

export default class CountScroll extends Component {
	render() {
		return (
			<span className="count">{this.props.count}</span>
		)
	}
}

CountScroll.propTypes = {
	count: PropTypes.number.isRequired
}