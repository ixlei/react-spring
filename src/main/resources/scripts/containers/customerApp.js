'use strict';

import React, {Component} from 'react';
import NavContainer from '../containers/customerNavContainers';
import Footer from '../components/footer';

export default class CustomerApp extends Component {
  render() {
	return (
	  <div>
		<NavContainer />
		<div id="main">
		  {this.props.children}
	    </div>
	    <Footer />
	  </div>
	);
  }
}