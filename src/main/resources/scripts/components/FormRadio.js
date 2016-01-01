'use strict';

import React, {Component, PropTypes} from 'react';
import {userType} from '../actions/user';

export default class FormRadio extends Component {
  constructor(props) {
    super(props);
  }
  
  change(e) {
  	let {dispatch} = this.props;
    dispatch(userType(e.target.value));
  }

  render() {
    let {value, ut} = this.props;
  	return <input type="radio" className="checked" 
  	  value={this.props.value} name="type"
      onChange= {this.change.bind(this)} checked={ut === value}/>
  }
}


FormRadio.propTypes = {
}