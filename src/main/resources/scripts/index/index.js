'use strict';

import React, {Component}  from 'react';
import {Provider} from 'react-redux';
import Route from '../routes/route';
import configStore from '../store/configStore';
import CustomerApp from '../containers/customerApp';

const store = configStore();
require('../../styles/main.scss');

export default class Index extends Component {
  render() {
	return (
	  <Provider store= {store}>
		<Route />
	  </Provider>
	)
  }
}


