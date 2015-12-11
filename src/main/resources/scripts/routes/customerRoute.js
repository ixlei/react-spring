'use strict';

import {Router, Route} from 'react-router';
import {Component} from 'react';
import customerApp from '../containers/customerApp';

export default class customerRoute extends Component {
	render() {
		return (
			<Router>
				<Route path="/" component={customerApp}>
				</Route>
			</Router>
		);
	}
}