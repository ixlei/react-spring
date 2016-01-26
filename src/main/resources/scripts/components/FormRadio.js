'use strict';

import React, {Component, PropTypes} from 'react';
import {userType} from '../actions/user';

export default class FormRadio extends Component {
  constructor(props) {
    super(props);
  }
  
  change(e) {
  	const {dispatch} = this.props;
    dispatch(userType(e.target.value));
  }

  render() {
    const {value, ut} = this.props;
  	return (<input type="radio" 
      className="checked"
      name="type"
  	  value={this.props.value}
      onChange= {this.change.bind(this)} 
      checked={ut === value}/>
    )
  }
}


FormRadio.propTypes = {
  value: PropTypes.string.isRequired,
  ut: PropTypes.string.isRequired
}