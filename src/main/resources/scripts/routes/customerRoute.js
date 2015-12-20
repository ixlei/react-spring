'use strict';

import React, {Component} from 'react';
import {Router, Route, Link, IndexRoute} from 'react-router';
import { createHistory, useBasename } from 'history';
import CustomerApp from '../containers/customerApp';
import CustomerIndex from '../containers/customerIndex';
import InvestmentHall from '../components/investmentHall';
import Reg from '../components/reg';
<<<<<<< HEAD
import RegForm from '../components/regForm';

const history = useBasename(createHistory)({
  basename: '/customer'
=======

const history = useBasename(createHistory)({
  basename: '/react-spring/customer'
>>>>>>> 3e93adb2ae05c6db12b5606074503f489a43b1aa
})

export default class CustomerRoute extends Component {
  render() {
	return (
		<Router history={history}>
		  <Route path="/" component={CustomerApp}>
			<IndexRoute component={CustomerIndex} />
			<Route path="index/:index" component={CustomerIndex} />
            <Route path="invest/:index" 
              component={InvestmentHall} />
<<<<<<< HEAD
            <Route path="reg" component={Reg}>
              <IndexRoute component={RegForm} />
            </Route>
=======
            <Route path="reg" component={Reg}></Route>
>>>>>>> 3e93adb2ae05c6db12b5606074503f489a43b1aa
		  </Route>
		</Router>
	)
  }
}