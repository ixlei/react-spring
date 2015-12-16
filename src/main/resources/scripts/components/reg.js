'use strict';

import React, {Component, PropTypes} from 'react';
import RegContainer from '../containers/regContainer';

require('../../styles/reg.scss');

export default class Reg extends Component {
  render() {
  	return (
  	  <div id="content">
	    <RegContainer />
		{this.props.children}
      </div>
  	)
  }
}
