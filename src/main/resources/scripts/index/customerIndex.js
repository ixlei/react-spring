'use strict';

import React, {Component}  from 'react';
import { Provider } from 'react-redux';
import customerRoute from '../routes/customerRoute';
import configStore from '../store/configStore';

const store = configStore();

export default class customerIndex extends Component {
	render() {
		return (
		<Provider store= {store}>
			<customerRoute />
		</Provider>
	  )
	}
}



