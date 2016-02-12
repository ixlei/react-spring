'use strict';

import React, {Component, PropTypes} from 'react';

export default class FormInput extends Component {
  render() {
  	const {text, name} = this.props;
    return (<div>
      <label className="label">{text}</label>
	    <input type="text" name={name} className="FormInput"/>
	  </div>
    )
  }
}

FormInput.propTypes = {
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

