'use strict';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import FormRadio from '../components/FormRadio';

class UserType extends Component {
  
  render() {
  	let {dispatch, userType} = this.props;
    let regChoose = {
      dispatch,
      userType
    }
  	return (<div>
  		<span className="label">用户类型:</span>
        <FormRadio {...Object.assign({value:'company'}, regChoose)} />
        <span>企业</span>
        <FormRadio {...Object.assign({value:'investor'}, regChoose)}/>
        <span className="check">投资者</span>
  	  </div>
  	)
  }
}

function mapStateToProps(state) {
  const {reg: {userType}} = state;
  return {
  	userType
  }
}

export default connect(mapStateToProps)(UserType);