'use strict';

import React, {Component,PropTypes} from 'react';
import {connect} from 'react-redux';
import CompanyNavContainer from '../containers/comapnyNavContainer';

class CompanyApp extends Component {
  render() {
  	return (<div>
  	  <CompanyNavContainer />
  	  <div id="main">
        {this.props.children}
      </div>
  	 </div>
  	)
  }
}

export default CompanyApp;