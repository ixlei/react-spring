'use strict';

import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Navigation} from 'react-router';
import FormSubmit from '../components/FormSubmit';

class FormSubmitContainer extends Component {
 
  render() {
  	return (<FormSubmit {...this.props} />)
  }
}

function mapStateToProps(state) {
  const {reg: {itemState, iagree, userType}} = state;
  let ready = false;
  if(userType === 'investor') {
  	ready = itemState.every(function(data) {
  	  let {id, valid} = data;
  	  if(id === 'code' || id === 'companyname') {
  	  	return true;
  	  }
  	  return valid === 'valid';
  	})
  } else {
    ready = itemState.every(function(data) {
  	  let {id, valid} = data;
  	  if(id === 'name' || id === 'IdCard') {
  	  	return true;
  	  }
  	  return valid === 'valid';
  	})
  }
  return {
  	ready: !(iagree && ready),
    value: '下一步'
  };
}

export default connect(mapStateToProps)(FormSubmitContainer);