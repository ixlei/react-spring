'use strict';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import FormRadio from '../components/FormRadio';

class UserType extends Component {
  
  render() {
  	const {dispatch, ut} = this.props;
    const regChoose = {dispatch, ut};
    
  	return (<div>
  		<label className="label">用户类型:</label>
        <FormRadio {...Object.assign({value:'company'}, regChoose)} />
        <label>企业</label>
        <FormRadio {...Object.assign({value:'investor'}, regChoose)}/>
        <label className="check">投资者</label>
  	  </div>
  	)
  }
}

function mapStateToProps(state) {
  const {user:{userType: ut}} = state;
  return {ut};
}

export default connect(mapStateToProps)(UserType);