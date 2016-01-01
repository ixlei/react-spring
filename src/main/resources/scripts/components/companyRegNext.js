'use strict';

import React, {Component, PropTypes} from 'react';
import FormInput from './FormInput';
import FormSelect from './FormSelect';
import {regStep} from '../actions/reg';
import FormSubmit  from './FormSubmit';
import {subAction} from '../actions/submit';
import Upload from '../components/upload';

export default class CompanyRegNext extends Component {
  componentDidMount() {
    const {dispatch} = this.props;
    dispatch(regStep(1));
  }

  componentWillReceiveProps(nextProps) {
    const {subType, subSuccess, isFetching} = nextProps;
    if(subType ==='reg2' && subSuccess && !isFetching) {
      this.context.history.pushState(null, '/customer/reg/finshCompany');
    }
  }
  
  submit(e) {
    e.preventDefault();
    const {dispatch} = this.props;
    let form = document.forms.reg;
    let formdata = new FormData(form);
    let arg = {
      action: '/customer/companyNext',
      body: formdata,
      subType: 'reg2'
    }
    dispatch(subAction(arg));
  }

  render() {
  	let comType = [{
  	  value: '有限责任公司',
  	  text: '有限责任公司',
  	  id: '1'
  	},{
  	  value: '股份有限公司',
  	  text: '股份有限公司',
  	  id: '2'
  	}, {
  	  value: '个人合伙企业',
  	  text: '个人合伙企业',
  	  id: '3'
  	}, {
  	  value: '其他',
  	  text: '其他',
  	  id: '4'
  	}];

  	let industry = [{
  	  value: '金融投资',
  	  text: '金融投资',
  	  id: '1'
  	}, {
  	  value: '房地产',
  	  text: '房地产',
  	  id: '2'
  	}, {
  	  value:'能源',
  	  text: '能源',
  	  id: '3'
  	}];

  	let earnPattern = [{
  	  value: '关系服务',
  	  text: '关系服务',
  	  id: '1'
  	}, {
  	  value:'产业标准',
  	  text: '产业标准',
  	  id: '2'
  	}, {
  	  value:'个性挖掘',
  	  text: '个性挖掘',
  	  id: '3'
  	}, {
  	  value: '成本占优',
  	  text: '成本占优',
  	  id: '4'
  	}]

  	return (
  	  <form name="reg">
  	    <div id="left-reg">
  	      <ul>
  	        <li><FormSelect name="企业类型:" name="companyType" 
  	        options={comType}/></li>
  	        <li><FormInput text="注册资本:" name="registerCapital"/></li>
  	        <li><FormInput text="营业执照注册号:" name="businessLicence"/></li>
  	        <li><FormInput text="法定代表人:" name="legalRepresentative" /></li>
  	        <li><FormInput text="成立时间" name="createTime" /></li>
  	        <li><FormInput text="注册地址:" name="registerAddress" /></li>
  	        <li><FormInput text="总部地址:" name="headquartersAddress" /></li>
  	        <li><FormInput text="咨询电话:" name="phoneNumber" /></li>
  	        <li><FormSelect text="所属行业:" name="workField" 
  	        options={industry} /></li>
  	        <li><FormInput text="主要业务:" name="mainField" /></li>
  	        <li><FormSelect text="盈利模式:" name="earnPattern" 
  	         options={earnPattern} />
  	        </li>
  	        <li><FormSubmit ready={false} value="下一步"/></li>
  	      </ul> 
  	    </div>
  	    <Upload />
  	  </form>
  	)
  }
}

CompanyRegNext.propTypes = {
  subType: PropTypes.string.isRequired,
  subSuccess: PropTypes.bool.isRequired,
  isFetching: PropTypes.bool.isRequired

}