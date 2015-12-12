'use strict';

import React, {Component, PropTypes} from 'react';
import UnsliderContainer from './unsliderContainer';

export default class CustomerIndex extends Component {
	render() {
		return (
			<div id="main">
				<div id="content">
					<UnsliderContainer />
				</div>
			</div>
		)
	}
}