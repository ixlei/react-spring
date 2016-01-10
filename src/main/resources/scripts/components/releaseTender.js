'use strict';

import React, {Component, PropTypes} from 'react';
import ReleaseDebtLeftNav from './releaseDebtLeftNav';
import FormSelect from './FormSelect';
import FormSubmit from './FormSubmit';
import subAction from '../actions/submit';
import {activeIndex} from '../actions/navHeader';
import {fetchUser} from '../actions/user';

export default class ReleaseTender extends Component {

  submit(e) {
  	const {dispatch} = this.props;
    e.preventDefault();
    let form = document.forms.debt;
    let debt = new FromData(form);
    let action = '/investor/releaseTender';
    dispatch(subAction({form, debt, action}))
  }

  componentDidMount() {
  	const {dispatch} = this.props;
  	dispatch(activeIndex(1));
  	dispatch(fetchUser());
  }

  renderLeftNav() {
  	return (
  	  <div id="list">
        <div id="list-title">
          <span>意向发布</span>
        </div>
        <ReleaseDebtLeftNav />
      </div>
  	)
  }

  rederUserInfo() {
  	const {userInfo} = this.props;
    return (<div>
      <div className="body_title">
        基本信息
      </div>
      <div className="first">
        <p >
          姓名：{userInfo.username}<br/>
          所在地区：{userInfo.companyAddress}<br/>
          产品类型：股权投资<br/>
        </p>
      </div>
      <div className="first">
        <p >
          投资地区：{userInfo.investorAddress}<br/>
          资金主体：{userInfo.legalRepresentative}<br/>
          投资行业：{userInfo.investFiled}<br/>
        </p>
       </div>
     </div>
    )
  }

  renderDebtForm() {
  	return (
  	  <form className="input_form" 
  	   name="debt" onSubmit={this.submit.bind(this)}>
  	   <div>
  	    <div>
  	      <label>投资金额：</label>
	      <input className="input" type="text" name="investmentMin" />
	      <label>-</label>
	      <input className="input" type="text" name="investmentMax" />
	      <label>万</label>
  	    </div>
  	    <div>
  	       <label>投资年限：</label>
	       <input className="input" type="text" name="investmentTimeOut" />
	       <label>&nbsp;年</label>
  	    </div>
  	   </div>
	   <div className="main_first">
	     <div className="body_title">
	       <p>更多信息</p>
	     </div>
	     <div className="input_text">
	       <div className="input_form">
	         <label>参股比例:</label>
	         <input className="input" type="text" name="investmentProportionMin" />
	         <label>-</label>
	         <input className="input" type="text" name="investmentProportionMax" />
	         <label>&nbsp;%</label>
	       </div>
	       <div>
	         <FormSelect 
	          name="investmentStage" 
	          labelText="投资阶段:"
	          options={['看书', '旅游']} />
	       </div>                      
	       <div className="input_form">
	         <FormSelect name="fileProvideRequest" 
	         labelText="要求提供文件:"
	         options={['是', '否']} />
	       </div>
	       <div className="input_textarea">投资要求概述:</div>
	         <textarea rows="7" cols="60" name="investmentRequest"></textarea>
	       </div>
	     </div>
	     <div id="button">
	       <FormSubmit ready={false} value="发布" />
	     </div>
	  </form>
  	)
  }

  render() {
  	return (
  	  <div id="main_body_m">
       <div id="swap">
         {this.renderLeftNav()}
         {this.rederUserInfo()}
        <div className="input_text">
         {this.renderDebtForm()}
        </div>
       </div>
     </div>
  	)
  }
}

ReleaseTender.propTypes = {
  userInfo: PropTypes.object.isRequired
}
