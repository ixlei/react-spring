'use strict';

import React, {Component} from 'react';
import {Router, Route} from 'react-router';
import CustomerApp from '../containers/customerApp';

export default class CustomerRoute extends Component {
	render() {
		return (
			<Router>
				<Route path="/" component={CustomerApp}>
				</Route>
			</Router>
		);
	}
}