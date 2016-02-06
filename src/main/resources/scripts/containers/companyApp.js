'use strict';

import React, {Component,PropTypes} from 'react';
import CompanyNavContainer from '../containers/companyNavContainer';
import Footer from '../components/footer';

class CompanyApp extends Component {
  render() {
  	return (<div>
  	  <CompanyNavContainer />
  	  <div id="main">
        {this.props.children}
      </div>
      <Footer />
  	 </div>
  	)
  }
}

export default CompanyApp;