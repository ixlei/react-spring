'use strict';

import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Unslider from '../components/unslider';

class UnsliderContainer extends Component {
  render() {
    return (
	  <Unslider {...this.props} />
    )
  }
}

function mapStateToProps(state) {
	return {
		list: ['banner1.jpg', 'banner2.png', 'banner3.png'],
		arrowImgUrl: ['btn-pre.png', 'btn-next.png']
	}
}

export default connect(mapStateToProps)(UnsliderContainer);