'use strict';

import React, {Component, PropTypes} from 'react';
import RegContainer from '../containers/regContainer';

require('../../styles/reg.scss');
require('../../styles/font.scss');

export default class Reg extends Component {
  render() {
  	return (
  	  <div id="content">
        <RegContainer />
        <div id="reg">
    	  {this.props.children}
    	  </div>
      </div>
  	)
  }
}
