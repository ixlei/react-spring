'use strict';

import React, {Component, PropTypes} from 'react';
import {isFocus, itemTips, itemInvalid} from '../actions/reg';
import {postCheckValid} from '../actions/regCheckValid';

export default class FormIdcard extends Component {
  
  getTipsClassName(IsFocus, valid) {
  	if(Object.is(IsFocus, 'IdCard')) {
  	  return 'check icon-tips';
  	}
  	if(Object.is(valid, 'valid')) {
  	  return 'check icon-success';
  	}

  	if(Object.is(valid, 'invalid')) {
      return 'check icon-error';
  	}

  	return 'check';
  }

  focus(e) {
  	const {dispatch} = this.props;
    dispatch(isFocus(e.target.name));
    dispatch(itemTips('你的身份证号码'));
  }

  blur(e) {
    const {dispatch} = this.props;
    let Idcard = e.target.value;
    if(Idcard === '') {
      dispatch(itemInvalid(true));
      dispatch(itemTips('身份证号不能为空'));
      dispatch(isFocus(''));
      return;
    }

    let rgExp = /\d+/g;
    if(!rgExp.test(Idcard) || Idcard.length < 18) {
      dispatch(itemInvalid(true));
      dispatch(itemTips('身份证号不正确'));
      dispatch(isFocus(''));
      return;
    }

    let formdata = new FormData();
    formdata.append('IdCard', Idcard);
    dispatch(postCheckValid('IdCard', formdata))
      .then((json) => {
       const {entities: {check}} = json;
       if(check === 'valid') {
       	dispatch(itemTips(''));
       } else {
       	dispatch(itemTips('此身份证号已被占用'));
       }
        dispatch(isFocus(''));
      })
     
  }

  render() {
  	const {IsFocus, valid, tips, userType} = this.props;
  	return (<div>
      <span className="label">{userType === 'company' ? '组织机构代码:' : '身份证号:'}</span>
	  <input type="text"
	  className="reg-input"
	  name={userType === 'investor' ? "IdCard" : 'code'}
    onFocus={this.focus.bind(this)}
	  onBlur={this.blur.bind(this)}/>
	  <span className={this.getTipsClassName(IsFocus, valid)}>
	  {tips}
	  </span>
	</div>
  	)
  }
}

FormIdcard.propTypes = {
  IsFocus: PropTypes.string.isRequired,
  valid: PropTypes.string.isRequired,
  tips: PropTypes.string.isRequired,
  userType: PropTypes.string.isRequired
}