'use strict';

import React, {Component, PropTypes} from 'react';
import FormInput from './FormInput';
import FormSelect from './FormSelect';
import FormSubmit from './FormSubmit';
import {activeIndex} from '../actions/navHeader';
import {fetchUser} from '../actions/user';

class Raisedbonds extends Component {
  
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

  renderOtherInfo() {
  	return (<div className="buttom">
      <div>
        <FormInput text="发行金额：" name="publishMoneyMin" />
        <FormInput text="—" name="publishMoneyMax" />
        <label>万</label>
      </div>
      <div>
        <FormInput text="发行年限：" name="publishFixedYesrs" />
        <label>年</label>
      </div>
      <div>
        <label>还本付息方式:</label>
        <textarea cols="50" rows="6" name="publishFinsh">
        </textarea>
       </div>
       <div>
        <label>发行完成:</label>
        <textarea cols="50" rows="6" name="publishFinsh">
        </textarea>
       </div>
    </div>
   )
  }
  
  renderMoreInfoL() {
  	return (
      <div className="left fl">
        <div>
          <FormInput text="可承担最高利息：" name="occupyPercentMin" />
          <FormInput text="—" name="occupyPercentMax" />
          <label>%</label>
        </div>
        <div>
          <FormInput text="年资金占用时长：" name="exitWay" />
        </div>
        <div>
          <FormSelect 
           labelText={'可提供风控:'} 
           name="risk"
           options={[{value: 1, text: '是'}, {value: 0, text: '否'}]} />
        </div>
        <div>
          <FormInput name="bondsman" value="担保方:" />
        </div>
     </div>
    )
  }

  renderMoreInfoR() {
  	return (<div className="right right1 fl">
      <div>
        <FormInput name="netAsset" value="企业当前净资产:" />
        <label>万</label>
      </div>
      <div>
        <FormInput name="turnover" value="去年营业额：" />
        <label>万</label>
      </div>
      <div>
        <FormInput name="netProfit" value="公司净利润：" />
        <label>万</label>
      </div>
      <div>
        <FormInput name="investmentMinRequest" value="还款来源：" />
        <label>万</label>
      </div>
    </div>
   )
  }

  render() {
    return (<form name="">
      <div className="basic_info">
        {this.renderUserInfo()}
        {this.renderOtherInfo()}
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

Raisedbonds.propTypes = {
  userInfo: PropTypes.object.isRequired
}

export default Raisedbonds;