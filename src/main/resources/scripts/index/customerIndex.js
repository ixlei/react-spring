'use strict';

import React, {Component}  from 'react';
import {Provider} from 'react-redux';
import CustomerRoute from '../routes/customerRoute';
import configStore from '../store/configStore';
import CustomerApp from '../containers/customerApp';

const store = configStore();

export default class CustomerIndex extends Component {
	render() {
		return (
		<Provider store= {store}>
			<CustomerRoute />
		</Provider>
	  )
	}
}



