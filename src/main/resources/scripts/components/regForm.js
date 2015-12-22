'use strict';

import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import FormRadio from './FormRadio';
import FormUsername from './FormUsername';
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
    this.context.history.pushState(null, '/');
  }
  
  render() {
  	let {dispatch, userType} = this.props;
    let regChoose = {
      dispatch,
      userType
    }
  	return (
  	  <form id="form" name="reg" onSubmit={this.submit.bind(this)}>
  	    <ul>
  	      <li>
  	        <span className="label">用户类型:</span>
  	        <FormRadio {...Object.assign({value:'company'}, regChoose)} /><span>企业</span>
  	        <FormRadio {...Object.assign({value:'investor'}, regChoose)}/>
  	        <span className="check">投资者</span>
  	      </li>
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
  let {reg: {userType} } = state;
  return {
    userType
  }
}

RegForm.contextTypes = {
  history: PropTypes.object.isRequired
}

export default connect(mapStateToProps)(RegForm);