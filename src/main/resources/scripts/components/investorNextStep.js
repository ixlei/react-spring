'use strict';

import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import FormInput from './FormInput';
import {regStep} from '../actions/reg';
import FormSubmit  from './FormSubmit';
import {subAction} from '../actions/submit';
import Upload from '../components/upload';

class InvestorNextstep extends Component {
  componentDidMount() {
    const {dispatch} = this.props;
    dispatch(regStep(1));
  }

  submit(e) {
    e.preventDefault();
    const {dispatch} = this.props;
    let form = document.forms.reg;
    let formdata = new FormData(form);
    let arg = {
      action: '/customer/investorNextStep',
      body: formdata,
      subType: 'reg2'
    }
    dispatch(subAction(arg));
  }
  
  componentWillReceiveProps(nextProps) {
    const {subType, subSuccess, isFetching} = nextProps;
    if(subType ==='reg2' && subSuccess && !isFetching) {
      this.context.history.pushState(null, '/customer/reg/finshInvestor');
    }
  }

  render() {
  	return (
  	<form name="reg" onSubmit={this.submit.bind(this)}>
  	  <div id="left-reg">
	    <ul>
	      <li><FormInput text="公司名称:" name="companyName"/></li>
	      <li><FormInput text="法定代表人:" name="legalRepresentative"/></li>
	      <li><FormInput text="法定代表委托人:" name="legalRepresentativewt" /></li>
	      <li><FormInput text="营业执照注册号:" name="businesslicence" /></li>
	      <li><FormInput text="注册资本:" name="registerCapital" /></li>
	      <li><FormInput text="注册地址:" name="registerAddress" /></li>
	      <li><FormInput text="所在地区:" name="companyAddress" /></li>
	      <li><FormInput text="投资地区:" name="investAddress"/></li>
	      <li><FormInput text="投资周期:" name="investCycle" /></li>
	      <li><FormInput text="总部地址:" name="headquartersAddress"/></li>
	      <li><FormInput text="咨询电话:" name="phonenumber"/></li>
	      <li><FormSubmit ready={false} value="下一步"/></li>
	    </ul>
	  </div>
	  <Upload />
  	</form>
  	)
  }
}

function mapStateToProps(state) {
  const {subReducer: {subType, subSuccess,isFetching}, user:{userType}} = state;
  return {
  	subType,
  	subSuccess,
  	isFetching,
  	userType
  };
}

InvestorNextstep.contextTypes = {
  history: PropTypes.object.isRequired
}

export default connect(mapStateToProps)(InvestorNextstep);