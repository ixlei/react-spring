'use strict';

import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import UnsliderContainer from '../containers/unsliderContainer';
import InvestIntroduce from './investintroduce';
import {activeIndex} from '../actions/navHeader';

class InvestmentHall extends Component {

  componentDidMount() {
  	const {dispatch, params: {index}} = this.props;
    dispatch(activeIndex(parseInt(index)));
  }
  
  componentWillUnmount() {
    const {dispatch} = this.props;
    dispatch(activeIndex(-1));
  }

  render() {
    return (
     <div id="content">
       <UnsliderContainer />
       <InvestIntroduce />
    </div>
	) 
  }
}

function mapStateToProps(state) {
	return {};
}

export default connect(mapStateToProps)(InvestmentHall);
