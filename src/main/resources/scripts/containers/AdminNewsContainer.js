'use strict';

import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import AdminNews from '../components/adminNews';
import {fetchInews} from '../actions/news';

class AdminNewsContainer extends Component {
  componentDidMount() {
  	const {dispatch, userType} = this.props;
  	dispatch(fetchInews(userType))
  }

  render() {
  	return (<AdminNews {...this.props} />)
  }
}

function mapStateToProps(state) {
  const {news: {newsType, news, isFetching, validate}} = state;
  const inews = newsType === 'inews' ? news : [];
  return {
  	newsType, 
  	inews, 
  	isFetching,
  	validate
  };
}

export default connect(mapStateToProps)(AdminNewsContainer);