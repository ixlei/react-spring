'use strict';

import React, {Component, PropTypes} from 'react';

export default class FormSelect extends Component {
  render() {
  	const {labelText, name, options} = this.props;
  	return (<div>
  		<label className="label">{labelText}</label>
  		<select name={name}>
  		  {options.map(function(option) {
            return <option value={option.value} key={option.id}>{option.text}</option>
  		  })}
  		</select>
  	  </div>
  	)
  }
}

FormSelect.propTypes = {
  labelText: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired
}