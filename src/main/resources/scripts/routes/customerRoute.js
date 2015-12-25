'use strict';

import React, {Component} from 'react';
import {Router, Route, Link, IndexRoute} from 'react-router';
import {createHistory, useBasename} from 'history';
import CustomerApp from '../containers/customerApp';
import CustomerIndex from '../containers/customerIndex';
import InvestmentHall from '../components/investmentHall';
import Reg from '../components/reg';
import RegForm from '../components/regForm';
import InvestorNextstep from '../components/investorNextStep';

const history = useBasename(createHistory)({
  basename: '/customer'
})

export default class CustomerRoute extends Component {
  render() {
	return (
		<Router history={history}>
		  <Route path="/" component={CustomerApp}>
			<IndexRoute component={CustomerIndex} />
			<Route path="index/:index" component={CustomerIndex} />
            <Route path="invest/:index" component={InvestmentHall} />
            <Route path="reg" component={Reg}>
              <Route path="investorNext" component={InvestorNextstep} />
              <IndexRoute component={RegForm} />
            </Route>
		  </Route>
		</Router>
	)
  }
}