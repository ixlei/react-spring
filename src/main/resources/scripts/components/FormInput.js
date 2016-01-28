'use strict';

import React, {Component, PropTypes} from 'react';

export default class FormInput extends Component {
  render() {
  	const {text, name} = this.props;
    return (<div>
      <span className="label">{text}</span>
	    <input type="text" name={name} className="reg-input"/>
	  </div>
    )
  }
}

FormInput.propTypes = {
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

