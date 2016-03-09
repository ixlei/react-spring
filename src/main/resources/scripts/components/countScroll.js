'use strict';

import React, {Component, PropTypes} from 'react';
import {Motion, spring} from 'react-motion';
import * as util from '../utils/varType';

export default class CountScroll extends Component {

  formatCount(count) {
  	let regExp = /(?=(?!^)(\d{3})+$)/g;
    if(util.isNumber(count)) {
      return count.toString().replace(/^\d+/, (match) => {
    	return match.replace(regExp, ',');
      })
    }
  }

  countScrollFormat(value) {
  	let {props: {count}} = this;
  	return this.formatCount(parseInt(value * (count / 10)));
  }

  render() {
	return (
	  <Motion defaultStyle={{x: 0}} style={{x: spring(10)}}>
        {value => {
          let {x: num} = value;
          return (<span className="count">{this.countScrollFormat(num)}</span>)
        }}
      </Motion>
	)
  }
}

CountScroll.propTypes = {
  count: PropTypes.number.isRequired
}