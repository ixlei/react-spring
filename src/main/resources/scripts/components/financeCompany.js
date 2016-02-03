'use strict';

import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import FormSearch from './FormSearch';

class FinanceCompany extends Component {

  renderIndustry() {
  	const {hotIndustry} = this.props;
  	return (<div id="industry-list">
	  <span className="hot-push">热门行业:</span>
		<ul>
		  {hotIndustry.map((data, index) => (
            this.renderHotIndustryList(data,index);
		   ))
		  }
		</ul>
	</div>
    )
  }
  
  renderHotIndustryList(data, index) {
  	return (<li key={`indlist${index}`}>
  	  {data.map((data, index) => (
        <a href="javascript:;" key={`industry${index}`}>
          <span className="industry" data-industry={data}>{data}</span>
        </a>
  	   ))}
  	 </li>
  	)
  }

  renderHotArea() {
  	const {hotArea} = this.props;
  	return (<div id="area-list">
      <span className="hot-push">热门地区:</span>
      <ul>
        {hotArea.map((data, index) => (
          this.renderHotAreaList(data,index);
         ))}
      </ul>
     </div>
    )
  }

  renderHotAreaList(data,index) {
  	return (<li key={`arealist${index}`}>
  	  {data.map((data, index) => (
        <a href="javascript:;" key={`area${index}`}>
          <span className="industry" data-area={data}>{data}</span>
        </a>
  	   ))}
  	 </li>
  	)
  }

  renderNumIn() {
  	return (<div id="number-in">
      <span className="hot-push">融资额:</span>
      <div id="number">
        <form>
          <input type="text" placeholder="￥" name="min"/>
          <span>-</span>
          <input type="text" placeholder="￥" name="max"/>
          <span>单位:万</span>
          <div>
            <input type="button" value="确定" />
          </div>
        </form>
      </div>
    </div>
   )
  }
  
  renderDropUi(drop) {
  	return (<span className="filter-item">
	  <a href="javascript:;">{drop}
	    <img src="/images/back-bottom.png" />
	  </a>
	</span>
	)
  }
  
  renderSiteNav() {
  	return (<div id="filter-nav">
  	  <ul>
  	    <li className="filter-item-list">
  	      {this.renderDropUi('行业')}
  	      <div id="industry-layer">
            <div id="industry-search">
             <FormSearch />
            </div>
            {this.renderIndustry()}
  	      </div>
  	    </li>
  	    <li className="filter-item-list">
          {this.renderDropUi('地区')}
          <div id="area-layer">
            <div id="area-layer">
              <FormSearch />
            </div>
            {this.renderHotArea()}
          </div>
  	    </li>
  	    <li className="filter-item-list">
  	      {this.renderDropUi('融资额')}
  	      {this.renderNumIn()}
  	    </li>
  	  </ul>
  	 </div>
  	)
  }

  renderComInfo() {
  	const {comInfo} = this.props;
  	return (<table>
      <thead>
        <tr>
          <td>公司logo/照片</td>
          <td>公司名称</td>
          <td>主营业务</td>
          <td>融资需求</td>
          <td>公司简介</td>
        </tr>
      </thead>
      <tbody>
        {comInfo.map((data, index) => (
          <tr key={data.id}>
            <td>{data.url}</td>
            <td>{data.companyName}</td>
            <td>{data.product}</td>
            <td>{data.need}</td>
            <td>{data.introduce}</td>
          </tr>
         ))}
      </tbody>
  	 </table>
  	)
  }

  render() {
  	return (<div id="side-nav">
  	   <div id="side-nav">
  	     <FormSearch />
  	     {this.renderSiteNav()}
  	   <div>
  	   <div id="finance-list">
  	     {this.renderComInfo()}
  	   </div>
  	 </div>
  	)
  }
}

FinanceCompany.propTypes = {
  hotIndustry: PropTypes.array.isRequired,
  hotArea: PropTypes.array.isRequired,
  comInfo: PropTypes.array.isRequired
}

export default FinanceCompany;