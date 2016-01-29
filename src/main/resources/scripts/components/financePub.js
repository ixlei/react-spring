'use strict';

import React, {Component, PropTypes} from 'react';
import FormInput from './FormInput';
import FormSubmit from './FormSubmit';
import {activeIndex} from '../actions/navHeader';
import {fetchUser} from '../actions/user';

export default class FinancePub extends Component {
  
  componentDidMount() {
  	const {dispatch, params:{index}} = this.props;
    dispatch(fetchUser());
    dispatch(activeIndex(parseInt(index)));
  }
  
  componentWillUnmount() {
    const {dispatch} = this.props;
    dispatch(activeIndex(-1));
  }
  
  renderUserInfo() {
  	const {userInfo} = this.props;
  	return (<div>
      <p className="tit">基本信息</p>
      <div className="left fl">
        <p>公司名称:<span>{userInfo.companyName}</span></p>
        <p>公司注册时间：<span>{userInfo.createTime}</span></p>
        <p>产品类型：<span>私募债</span></p>
      </div>
      <div className="right fr">
        <p>公司注册地区：<span>{userInfo.registerAddress}</span></p>
        <p>公司注册资本：<span>{userInfo.registerCapital}</span></p>
        <p>所属行业：<span>{userInfo.workField}</span></p>
      </div>
     </div>
  	)
  }
  
  renderBasicInfoOther() {
  	return (<div className="buttom">
      <div>
        <FormInput text="发行金额：" name="publishMoneyMin" />
        <FormInput text="-" name="publishMoneyMax" />
        <label>万</label>
      </div>
      <div>
        <FormInput text="发行年限：" name="publishFixedYesrs" />
        <label>年</label>
      </div>
      <div>
        <label for="text">发行完成:</label>
        <textarea id="textarea" cols="50" rows="6" name="publishFinsh">
        </textarea>
      </div>
    </div>
  	)
  }
  
  renderMoreInfoR() {
  	return (<div className="right right1 fl">
      <div>
        <FormInput text="企业当前净资产:" name="netAsset" />
      </div>
      <div>
        <FormInput text="去年营业额：" name="turnover" />
      </div>
      <div>
       <FormInput text="公司净利润：" name="netProfit" />
      </div>
      <div>
        <FormInput text="投资门槛：" name="investmentMinRequest" />
      </div>
      <div>
        <FormInput text="最低追加资金:" name="minAddto" />
      </div>
      <div>
        <FormSubmit value="发布" ready={false} />
      </div>
    </div>
  	)
  }

  renderMoreInfoL() {
  	return (
      <div className="left fl">
        <div>
          <FormInput text="资金方占股比例：" name="occupyPercentMin" />
          <FormInput text="-" name="occupyPercentMax" />
          <label>%</label>
        </div>
        <div>
          <FormInput text="投资退出方式：" name="exitWay" />
        </div>
        <div>
          <FormInput text="项目所处阶段:" name="currentStage" />
        </div>
        <div>
          <FormInput text="最短退出年限:" name="exitMinTime" />
        </div>
        <div>
          <FormInput text="担保方:" name="bondsman" />
        </div>
     </div>
    )
  }

  render() {
  	return (
      <form name="financePub">
        <div className="basic_info">
         {this.renderUserInfo()}
         {this.renderBasicInfoOther()}
        </div>
        <div className="more_info">
         <p className="tit">更多信息</p>
         {this.renderMoreInfoL()}
         {this.renderMoreInfoR()}
        </div>
      </form>
  	)
  }
}

FinancePub.propTypes = {
  userInfo: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired
}