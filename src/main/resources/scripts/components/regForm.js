'use strict';

import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {subAction} from '../actions/submit';
import {isFocus, initRegItem} from '../actions/reg';
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
import FormComNameContainer from '../containers/FormComNameContainer';
import FormComCodeContainer from '../containers/FormComCodeContainer';
import {constructRegNextUrl} from '../utils/constructUrl';

class RegForm extends Component {
  
  submit(e) {
    e.preventDefault();
    const {dispatch} = this.props;
    let reg = document.forms.reg;
    let formdata = new FormData(reg);
    let arg = {
      action: '/customer/reg',
      body: formdata,
      subType: 'reg1',
      credentials: 'include'
    }
    dispatch(subAction(arg));
  }
  
  componentWillReceiveProps(nextProps) {
    const {subType, subSuccess, isFetching, userType} = nextProps;
    if(subType ==='reg1' && subSuccess && !isFetching) {
      if(userType === 'investor') {
        this.context.history.pushState(null, constructRegNextUrl(userType));
      } else {
        this.context.history.pushState(null, constructRegNextUrl(userType));
      }
    }
  }
  
  componentWillUnmount() {
    const {dispatch} = this.props;
    dispatch(isFocus(''));
    dispatch(initRegItem());
  }

  render() {
    const {userType} = this.props;
  	return (
  	  <form name="reg" onSubmit={this.submit.bind(this)}>
  	    <ul>
  	      <li><UserType /></li>
          <li><FormUsernameContainer /></li>
          <li><FormPasswordContainer /></li>
          <li><FormRepasswordContainer /></li>
          <li>
            {userType === 'investor' 
             ? <FormNameContainer />
             : <FormComNameContainer />
            }
          </li>
          <li>
            { userType === 'investor'
              ? <FormIdcardContainer />
              : <FormComCodeContainer />
            }
          </li>
          <li><FormCheckboxContainer /></li>
          <li><FormSubmitContainer /></li>
  	    </ul>
  	  </form>
  	)
  }
}

RegForm.contextTypes = {
  history: PropTypes.object.isRequired
}

RegForm.propTypes = {
  subType: PropTypes.string.isRequired,
  subSuccess: PropTypes.bool.isRequired, 
  isFetching: PropTypes.bool.isRequired, 
  userType: PropTypes.string.isRequired
}

export default RegForm;