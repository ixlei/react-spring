'use strict';

import React, {Component, PropTypes} from 'react';

export default class RegStep extends Component {
  render() {
  	const {regStep} = this.props;
    return (
      <div id="sitenav">
        <ul>
          <li>
          <span className={parseInt(regStep) === 0 ? 'sitnav-active' : ''}>
            <img src="/images/1.png" />设置登录名
          </span></li>
          <li>
            <span className={parseInt(regStep) === 1 ? 'sitnav-active' : ''}><img src="/images/2.png" />填写注册信息</span>
          </li>
          <li>
            <span className={parseInt(regStep) === 2 ? 'sitnav-active' : ''}><img src="/images/3.png"/>注册完成</span>
          </li>
        </ul>
      </div>
    )
  }
}

RegStep.propTypes = {
  regStep: PropTypes.number.isRequired
}