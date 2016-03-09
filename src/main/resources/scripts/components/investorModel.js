'use strict';

import React, {Component, PropTypes} from 'react';
import FormSelect from './FormSelect';
import FormSearch from './FormSearch';
import {Link} from 'react-router';
import {activeIndex} from '../actions/navHeader';
import {getInvestorModel} from '../actions/investorModel';
import Area from './area';
import Industry from './industry';
import MoneyType from './moneyType';

export default class InvestorModel extends Component {
  componentDidMount() {
  	const {params:{index}, dispatch} = this.props;
    dispatch(activeIndex(parseInt(index)));
    dispatch(getInvestorModel('any'));
  }

  componentWillReceiveProps(nextProps) {
  	const {modelType:oldModelType, dispatch} = this.props;
  	const {modelType:newModelType} = nextProps;
  	const change = oldModelType === newModelType;
  	if(!change) {
  	  dispatch(getInvestorModel(newModelType));
  	}
  }

  componentWillUnmount() {
    const {dispatch} = this.props;
    dispatch(activeIndex(-1));
  }
  
  renderTypeSelect() {
  	let options = [
  	 {
        value: '全部',
        text: '全部'
  	 },
  	 {
  	 	value: 'debt',
      text: '私募债'
  	 },
  	 {
  	    value: 'stock',
  	    text: '私募股权'
  	 }
  	];

  	return (
  	  <div id="selectForm">
  	    <FormSelect options={options} labelText="类型" />
  	  </div>
  	)
  }
  
  renderPush() {
    return (
      <div>
        <Link to={'/investor/push'} >查看推荐</Link>
      </div>
    )
  }
   
   renderInterval() {
     return (
       <div>
         <p>资金区间</p>
         <div className="selectItem-group">
           <input type="text" className="sizeSelect"/>
          <span>-</span>
           <input type="text" className="sizeSelect"/>
           <span>万元</span>
         </div>
       </div>
     )
   }
  
  renderReturnRate() {
  	return (
  	  <div className="selectItem-group">
        <input type="text" 
        className="sizeSelect" name="lowLeastReturnDemand"/>
        <span>-</span>
        <input type="text" 
        className="sizeSelect" name="highLeastReturnDemand"/>
        <span>%</span>
      </div>
  	)
  }

  renderCreditRank() {
  	return (
  	  <div>
  	    <p>信用等级</p>
  	    <div className="selectItem-group">
          <input type="text" 
           className="sizeSelect" name="lowCreditRank"/>
           <span>-</span>
          <input type="text" className="sizeSelect" name="highCreditRank"/>
        </div>
        <div>
          <input type="submit" value="确定" id="patchConfirmButton"/>
        </div>
  	  </div>
  	)
  }
  
  renderInvestModel() {
  	const {data} = this.props;
  	return (
  	  <div id="TableList">
	    <table>
	      <thead>
		     <tr>
			    <th>产品名称</th>
      	  <th>类型</th>
      		<th>地区</th>
      		<th>所属行业</th>
      		<th>资金类型</th>
      	  <th>收益率</th>
      		<th className="rightItem">信用等级</th>
		     </tr>
		    </thead>
		    <tbody>
		   {data.map(data => (
          <tr key={`index${data.id}`}>
            <td>{data.companyName}</td>
            <td>{data.productType}</td>
            <td>{data.registerAddress}</td>
            <td>{data.workField}</td>
            <td>{data.productType}</td>
            <td>{data.returnRate}</td>
            <td>{data.creditLevvel}</td>
          </tr>
		   	))}
		  </tbody>
		</table>
	  </div>
  	)
  }
  
  render() {

  	return (
  	  <div id="content-iModel">
  	   <div id="site-nav">
          <FormSearch />
          {this.renderTypeSelect()}
        </div>
         {this.renderPush()}
        <form name="investorModel">
         <Area />
         <Industry />
         <MoneyType />
         {this.renderInterval()}
         {this.renderCreditRank()}
        </form>
        {this.renderInvestModel()}
  	  </div>
  	 )
  }
}

InvestorModel.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
}