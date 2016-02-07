'use strict';

import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import Area from './area';
import Industry from './industry';
import MoneyType from './moneyType';
import FormSelect from './FormSelect';
import FormSubmit from './FormSubmit';
import {activeIndex} from '../actions/navHeader';
import {getInvestorModel} from '../actions/investorModel';

export default class CorporateModel extends Component {
  
  componentDidMount() {
  	const {dispatch, params: {index}} = this.props;
    dispatch(activeIndex(parseInt(index)));
    dispatch(getInvestorModel('any'));
  }
  
  componentWillUnmount() {
    const {dispatch} = this.props;
    dispatch(activeIndex(-1));
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

  renderMoneySize() {
  	return (<div>
  	  <p>金额区间：</p>
  	  <div className="selectItemGroup">
       <input type="input" className="sizeSelect" />
       <span>-</span>
       <input type="input" className="sizeSelect" />
       <span>万元</span>
      </div>
     </div>
    )
  }

  renderTypeSelect() {
  	let options = [
  	 {
        value: 'all',
        text: '全部'
  	 },
  	 {
  	 	value: 'debtInvest',
      text: '私募投资'
  	 },
  	 {
  	    value: 'stockInvest',
  	    text: '私募投资'
  	 }
  	];

  	return (
  	  <div id="selectForm">
  	    <FormSelect 
          name="type"
  	      options={options} 
  	      labelText="类型" />
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
  
  renderModel() {
  	const {model} = this.props;
  	let proType = type => type === '股权投资' ? 1 : 2;
  	return (<div id="TableList">
      <table>
        <thead>
          <tr>
            <th>产品名称</th>
            <th>类型</th>
            <th>地区</th>
            <th>资金类型</th>
            <th>金额</th>
            <th className="rightItem">投资者</th>
          </tr>
        </thead>
        <tbody>
         {model.map((data, index) => {
           const type = proType(data.productType);
           return (<tr key={`model${index}`}>
             <td>
               <Link 
                 to={`/company/buy/${type}/${data.id}`}>
                 {data.companyName}
                 {data.investmentMin}
                 <span>万-</span>
                 {data.investmentMax}
                 <span>万投资项目</span>
               </Link>
             </td>
             <td>{data.productType}</td>
             <td>{data.registerAddress}</td>
             <td>{data.moneyType}</td>
             <td>{data.investmentMax}万</td>
             <td>{data.username}</td>
           </tr>
           )})}
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
        <form name="corporateModel">
         <Area />
         <Industry />
         <MoneyType />
         {this.renderReturnRate()}
         <FormSubmit value="确定"  ready={false} />
        </form>
        {this.renderModel()}
  	  </div>
  	)
  }
}

CorporateModel.propTypes = {
  model: PropTypes.array.isRequired,
  params: PropTypes.object.isRequired
}

