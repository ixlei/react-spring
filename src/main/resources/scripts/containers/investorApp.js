'use strict';

import React, {Component, PropTypes} from 'react';
import InvestorNavContainer from '../containers/investorNavContainer';

require('../../styles/investHeader.scss');

export default class InvestorApp extends Component {
  render() {
  	return (<div>
  	  <InvestorNavContainer />
  	  <div id="main">
  	    {this.props.children}
  	  </div>
  	</div>
  	)
  }
}