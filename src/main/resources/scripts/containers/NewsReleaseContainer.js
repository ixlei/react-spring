'use strict';

import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import NewsRelease from '../components/newsRelease';

class NewsReleaseContainer extends Component {
  render() {
  	return (<NewsRelease {...this.props} />)
  }
}

function mapStateToProps(state) {
  const {news: {isFetching, validate, news, error, newsType}} = state;
  return {
  	isFetching,
  	validate,
  	news,
  	error
  }
}

export default connect(mapStateToProps)(NewsReleaseContainer);