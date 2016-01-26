'use strict';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import FormRadio from '../components/FormRadio';

class UserType extends Component {
  
  render() {
  	const {dispatch, userType: ut} = this.props;
    const regChoose = {
      dispatch,
      ut
    };
    
  	return (<div>
  		<span className="label">用户类型:</span>
        <FormRadio {...Object.assign({value:'company'}, regChoose)} />
        <label>企业</label>
        <FormRadio {...Object.assign({value:'investor'}, regChoose)}/>
        <label className="check">投资者</label>
  	  </div>
  	)
  }
}

function mapStateToProps(state) {
  const {user:{userType}} = state;
  return {
  	userType
  }
}

export default connect(mapStateToProps)(UserType);