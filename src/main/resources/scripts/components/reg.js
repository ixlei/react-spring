'use strict';

import React, {Component, PropTypes} from 'react';
import RegContainer from '../containers/regContainer';

require('../../styles/reg.scss');

export default class Reg extends Component {
  render() {
  	return (
  	  <div id="content">
	    <RegContainer />
<<<<<<< HEAD
	    <div id="reg">
		  {this.props.children}
		</div>
=======
		{this.props.children}
>>>>>>> 3e93adb2ae05c6db12b5606074503f489a43b1aa
      </div>
  	)
  }
}
