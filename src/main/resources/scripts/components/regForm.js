'use strict';

import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import FormRadio from './FormRadio';
import FormUsername from './FormUsername';
import FormUsernameContainer from '../containers/FormUsernameContainer';
import FormPasswordContainer from '../containers/FormPasswordContainer';

class RegForm extends Component {

  render() {
  	let {dispatch, userType} = this.props;
    let regChoose = {
      dispatch,
      userType
    }

  	return (
  	  <form id="form" name="reg">
  	    <ul>
  	      <li>
  	        <span className="label">用户类型:</span>
  	        <FormRadio {...Object.assign({value:'company'}, regChoose)} /><span>企业</span>
  	        <FormRadio {...Object.assign({value:'investor'}, regChoose)}/>
  	        <span className="check">投资者</span>
  	      </li>
          <li><FormUsernameContainer /></li>
          <li><FormPasswordContainer /></li>
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

export default connect(mapStateToProps)(RegForm);