'use strict';

import React, {Component, PropType} from 'react';
import FormSelect from './FormSelect';
import FormSubmit from './FormSubmit';
import subAction from '../actions/submit';

export default class DebtPurchase extends Component {
  
  submit(e) {
  	const {dispatch} = this.props;
    e.preventDefault();
    let form = document.forms.debtPurchase;
    let debt = new FromData(form);
    let action = '/investor/debtPurchase';
    dispatch(subAction({form, debt, action}))
  }
  
  renderForm() {
  	return (
  	  <form 
  	  className="input_form"
  	  name="debtPurchase" onSubmit={this.submit.bind(this)}>
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
          <label>年</label>
        </div>
       </div>
       <div className="main_first">
         <div className="body_title">
          <p>更多信息</p>
         </div>
         <div className="input_text">
           <div className="input_form">
              <label>最低回报要求:(年利率)</label>
              <input className="input" type="text" name="returnRateMin" />
              <label>-</label>
              <input className="input" type="text" name="returnRateMax" />
              <label>%</label>
           </div>
           <div className="input_form">
             <FormSelect 
	          name="riskControllRequest" 
	          labelText="风险控制要求:"
	          options={['看书', '旅游']} />
           </div>
           <div className="input_form">
             <FormSelect name="fileProvideRequest" 
	           labelText="要求提供文件:"
	           options={['是', '否']} />
	       </div>
	       <div className="input_form">
             <div className="input_textarea">投资要求概述:</div>
             <textarea rows="7" cols="60" name="investmentRequest"></textarea>
           </div>
         </div>
      </div>
      <div id="button">
	    <FormSubmit ready={false} value="发布" />
	  </div>
    </form>
  	)
  }
  
  render() {
    return (<div className="input_text">
        {this.renderForm()}
      </div>
    )
  }

}