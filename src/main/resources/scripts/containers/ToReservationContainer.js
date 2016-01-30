'use strict';

import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import ToReservation from '../components/toReservation';

class ToReservationContainer extends Component {
  render() {
    return (<ToReservation {...this.props} />)
  }
}

function mapStateToProps(state) {
  const {news: {isFetching, validate, newsType, news : resvation ,error}} = state;
  return {
  	isFetching,
  	validate, 
  	newsType, 
  	resvation,
  	error
  };
}

export default connect(mapStateToProps)(ToReservationContainer);