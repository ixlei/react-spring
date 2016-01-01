'use strict';

import React, {Component} from 'react';
import NavContainer from '../containers/customerNavContainers';

export default class CustomerApp extends Component {
	render() {
		return (
		  <div>
			<NavContainer />
			  <div id="main">
				{this.props.children}
			  </div>
		  </div>
		);
	}
}