'use strict';

import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {subAction} from '../actions/submit';
import FormRadio from './FormRadio';
import FormUsername from './FormUsername';
import UserType from '../containers/userType';
import FormUsernameContainer from '../containers/FormUsernameContainer';
import FormPasswordContainer from '../containers/FormPasswordContainer';
import FormRepasswordContainer from '../containers/FormRepasswordContainer';
import FormNameContainer from '../containers/FormNameContainer';
import FormIdcardContainer from '../containers/FormIdcardContainer';
import FormCheckboxContainer from '../containers/FormCheckboxContainer';
import FormSubmitContainer from '../containers/FormSubmitContainer';

class RegForm extends Component {
  
  submit(e) {
    e.preventDefault();
    const {dispatch} = this.props;
    let reg = document.forms.reg;
    let formdata = new FormData(reg);
    let arg = {
      action: '/customer/reg',
      body: formdata,
      subType: 'reg1'
    }
    dispatch(subAction(arg));
  }
  
  componentWillReceiveProps(nextProps) {
    const {subType, subSuccess, isFetching} = nextProps;
    if(subType ==='reg1' && subSuccess && !isFetching) {
      this.context.history.pushState(null, '/reg/investorNext');
    }
  }

  render() {
  	return (
  	  <form name="reg" onSubmit={this.submit.bind(this)}>
  	    <ul>
  	      <li><UserType /></li>
          <li><FormUsernameContainer /></li>
          <li><FormPasswordContainer /></li>
          <li><FormRepasswordContainer /></li>
          <li><FormNameContainer /></li>
          <li><FormIdcardContainer /></li>
          <li><FormCheckboxContainer /></li>
          <li><FormSubmitContainer /></li>
  	    </ul>
  	  </form>
  	)
  }
}

function mapStateToProps(state) {
  const {subReducer: {subType, subSuccess,isFetching}, reg: {userType}} = state;
  return {
    subType,
    subSuccess,
    isFetching,
    userType
  }
}

RegForm.contextTypes = {
  history: PropTypes.object.isRequired
}

export default connect(mapStateToProps)(RegForm);