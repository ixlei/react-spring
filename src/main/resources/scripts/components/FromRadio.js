'use strict';

import React, {Component, PropTypes} from 'react';
import {userType} from '../actions/reg';

export default class FormRadion extends Component {
  constructor(props) {
    super(props);
    this.onChange.bind(this);
  }
  
  onChange(e) {
  	let {dispatch} = this.props;
    dispatch(userType(e.target.value));
  }

  render() {
  	return <input type="radio" className="checked" 
  	  value={this.props.value} name="type" onChange= {this.onChange}/>
  }
}

FormRadion.propTypes = {
}