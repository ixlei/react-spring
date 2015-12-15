'use strict';

import React, {Component} from 'react';
import {Router, Route, Link, IndexRoute} from 'react-router';
import { createHistory, useBasename } from 'history';
import CustomerApp from '../containers/customerApp';
import CustomerIndex from '../containers/customerIndex';

const history = useBasename(createHistory)({
  basename: '/react-spring/customer'
})

export default class CustomerRoute extends Component {
	render() {
		return (
			<Router history={history}>
				<Route path="/" component={CustomerApp}>
					<Route path="index"
						component={CustomerIndex} />
				</Route>
			</Router>
		)
	}
}