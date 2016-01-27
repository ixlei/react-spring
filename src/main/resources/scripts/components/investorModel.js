'use strict';

import React, {Component, PropTypes} from 'react';
import FormSelect from './FormSelect';
import {Link} from 'react-router';
import {activeIndex} from '../actions/navHeader';
import {getInvestorModel} from '../actions/investorModel';
import Area from './area';
import Industry from './industry';

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

  renderSearch() {
    return (
      <div id="searchForm">
		  <div id="searchInput">
		  <div id="textClear">
		    <a href="javascript:;">
		      <img src="/images/cancel.png"/>
		    </a>
		  </div>
		  <form name="search">
		    <input type="search" placeholder="请输入"/>
		    <input type="submit" value="搜索" />
		  </form>
		</div>
	  </div>
    )
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
  
  renderIndustry() {
  	const {industry} = this.props;
  	return (
  	  <div>
  	    <p>行业选择</p>
  	    <div className="selectItemGroup">
  	      {industry.map((data, index) => (
  	      	<span 
              className="selectItem" 
              key={`ind${index}`}>
  	      	  <input 
               type="checkbox" 
              name="investIndustry" 
              value={data} />{data}
  	      	</span>
  	      	))}
  	    </div>
  	  </div>
  	)
  }

  renderMoneyType() {
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
   
   renderInterval() {
     return (
       <div>
         <p>资金区间</p>
         <div className="selectItem-group">
           <input type="text" className="sizeSelect"/>-
           <input type="text" className="sizeSelect"/>万元
         </div>
       </div>
     )
   }
  
  renderReturnRate() {
  	return (
  	  <div className="selectItem-group">
        <input type="text" className="sizeSelect" name="lowLeastReturnDemand"/>&nbsp;-&nbsp;
        <input type="text" className="sizeSelect" name="highLeastReturnDemand"/> %
      </div>
  	)
  }

  renderCreditRank() {
  	return (
  	  <div>
  	    <p>信用等级</p>
  	    <div className="selectItem-group">
          <input type="text" className="sizeSelect" name="lowCreditRank"/>-
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
          {this.renderSearch()}
          {this.renderTypeSelect()}
        </div>
         {this.renderPush()}
        <form name="investorModel">
         <Area />
         <Industry />
         {this.renderMoneyType()}
         {this.renderInterval()}
         {this.renderCreditRank()}
        </form>
        {this.renderInvestModel()}
  	  </div>
  	 )
  }
}

InvestorModel.propTypes = {
  area:PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  industry: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  data: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
}