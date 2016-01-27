'use strict';

import React, {Component, PropTypes} from 'react';

export default class MoneyType extends Component {
  render() {
    return (
      <div className="selectItemGroup">
        <span className="select-item">
          <input type="checkbox" value="any" name="moneyType"/>全部</span>
        <span className="select-item">
          <input type="checkbox" value="no" name="moneyType"/>无担保</span>
        <span className="select-item">
          <input type="checkbox" value="company" name="moneyType"/>公司/机构担保</span>
        <span className="select-item">
          <input type="checkbox" value="person" name="moneyType"/>个人担保</span>
      </div>
    )
  }
}