'use strict';

import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import InvestorModel from '../components/investorModel';

class InvestorModelContainer extends Component {
  render() {
    let area = ['北京', '辽宁', '黑龙江', '吉林', '内蒙古', '云南','四川', '贵州', '湖南', '湖北', '河北'];
    let industry = ['金融投资', '房地产', '能源', '化学化工', '矿产冶金', '汽车汽配', '批发零售', '收藏品','交通运输', '旅游酒店', '农林牧渔', '批发零售'];
    const props = Object.assign({}, this.props, {
      area,
      industry
    })
  	return (<InvestorModel {...props} />)
  }
}

function mapStateToProps(state) {
  const {investorModel:{data, modelType}} = state;
  return {
    data,
    modelType
  }
}

export default connect(mapStateToProps)(InvestorModelContainer)
