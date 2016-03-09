'use strict';

import React, {Component, PropTypes} from 'react';

export default class RegStep extends Component {
  render() {
  	const {regStep} = this.props;
    let step = parseInt(regStep);
    return (
      <div id="reg--sitenav">
        <ul>
          <li className={step === 0 ? 'sitnav-active step' : 'step'}>
            <span><img src="/images/1.png" />设置登录名</span>
          </li>
          <li className={step === 1 ? 'sitnav-active step' : 'step'}>
            <span><img src="/images/2.png" />填写注册信息</span>
          </li>
          <li className={step === 2 ? 'sitnav-active step' : 'step'}>
            <span><img src="/images/3.png"/>注册完成</span>
          </li>
        </ul>
      </div>
    )
  }
}

RegStep.propTypes = {
  regStep: PropTypes.number.isRequired
};