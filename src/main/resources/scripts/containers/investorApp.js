'use strict';

import React, {Component, PropTypes} from 'react';
import InvestorNavContainer from '../containers/investorNavContainer';
import Footer from '../components/footer';

export default class InvestorApp extends Component {
  render() {
  	return (<div>
  	  <InvestorNavContainer />
  	  <div id="main">
  	    {this.props.children}
  	  </div>
  	  <Footer />
  	</div>
  	)
  }
}