'use strict';

import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import FormSearch from './FormSearch';
import {activeIndex} from '../actions/navHeader';
import {fetchFinance} from '../actions/fetchCompany';

class FinanceCompany extends Component {
	
  componentDidMount() {
  	const {dispatch, params: {index}} = this.props;
    dispatch(activeIndex(parseInt(index)));
    dispatch(fetchFinance());
  }

  renderIndustry() {

  	const hotIndustry = 
  	[['金融投资', '房地产', '能源', '化学化工']
  	, ['旅游酒店', '批发零售', '互联网', '交通运输']
    , ['收藏品', '交通运输']];

  	return (<div id="industry-list">
	  <p className="hot-push">热门行业:</p>
		<ul>
		  {hotIndustry.map((data, index) => (
            this.renderHotIndustryList(data,index)
		   ))}
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
  	const hotArea = [['北京', '上海', '广州', '深圳', '杭州', '成都'], ['大连', '南京', '西安']];
  	return (<div id="area-list">
      <p className="hot-push">热门地区:</p>
      <ul>
        {hotArea.map((data, index) => (
          this.renderHotAreaList(data,index)
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
      <p className="hot-push">融资额:</p>
      <div id="number">
        <form>
          <input type="text" placeholder="￥" name="min"/>
          <label>-</label>
          <input type="text" placeholder="￥" name="max"/>
          <label>单位:万</label>
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
  	    <li className="filter-nav--item--list">
  	      {this.renderDropUi('行业')}
  	      <div id="industry-layer">
            <div id="industry-search">
             <FormSearch />
            </div>
            {this.renderIndustry()}
  	      </div>
  	    </li>
  	    <li className="filter-nav--item--list">
          {this.renderDropUi('地区')}
          <div id="area-layer">
            <div id="area-search">
              <FormSearch />
            </div>
            {this.renderHotArea()}
          </div>
  	    </li>
  	    <li className="filter-nav--item--list">
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
          <th>公司logo/照片</th>
          <th>公司名称</th>
          <th>主营业务</th>
          <th>融资需求</th>
          <th>公司简介</th>
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
  	return (<div id="content">
  	  <div id="side-nav">
  	    <FormSearch />
  	    {this.renderSiteNav()}
  	  </div>
  	  <div id="finance-list">
  	    {this.renderComInfo()}
  	  </div>
  	</div>
  	)
  }
  	
}

FinanceCompany.propTypes = {
  comInfo: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  invalidate: PropTypes.bool.isRequired,
  fetchType: PropTypes.string.isRequired
}

export default FinanceCompany;