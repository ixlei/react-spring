'use strict';

import React, {Component, PropTypes} from 'react';
import RegContainer from '../containers/regContainer';

export default class Reg extends Component {
  render() {
  	return (
  	  <div id="content-reg">
        <RegContainer />
        <div id="reg">
    	  {this.props.children}
    	  </div>
      </div>
  	)
  }
}
