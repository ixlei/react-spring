'use strict';

import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import UnsliderContainer from '../containers/unsliderContainer';
import InvestIntroduce from './investintroduce';
import {activeIndex} from '../actions/navHeader';

require('../../styles/investmentHall.scss');

class InvestmentHall extends Component {

  componentDidMount() {
  	 const {dispatch} = this.props;
     dispatch(activeIndex(this.props.params.index));
  }

  render() {
    return (
      <div id="content">
        <UnsliderContainer />
        <div id="service-item">
          <InvestIntroduce />
        </div>
      </div>
	)
  }
}

function mapStateToProps(state) {
	return {};
}

export default connect(mapStateToProps)(InvestmentHall);
