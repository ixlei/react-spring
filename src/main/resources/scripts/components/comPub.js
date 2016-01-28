'use strict';

import React, {Component, PropTypes} from 'react';
import FinancePubNav from '../components/financePubNav';

class Compub extends Component {
  render() {
  	return (<div className="wrap">
  	  <div><FinancePubNav /></div>
  	  <div className="finance-pub-content">
  	   {this.props.children}
  	  </div>
     </div>
  	)
  }
}

export default Compub;