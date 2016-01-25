'use strict';

import React, {Component, PropTypes} from 'react';
import InewsLeftNav from './inewsLeftNav';
import {Link} from 'react-router';
import {fetchInews} from '../actions/news';

export default class Inews extends Component {
  
  componentDidMount() {
  	const {dispatch} = this.props;
  	dispatch(fetchInews());
  }

  renderLeftNav() {
  	return (<div id="sidebarContainer">
	  <p id="sidebarTitle" className="sidebarItem">我的消息</p>
      <InewsLeftNav />
     </div>
  	)
  }

  renderSearch() {
  	return (<div id="searchForm">
      <input type="search" name="search" />
      <input type="submit" value="搜索" />
	</div>
	)
  }

  renderNewsList() {
  	const {inews} = this.props;
  	return (<div id="TableList">
      <table className="hovertable">
        <thead>
         <tr>
           <th>日期</th>
           <th>内容</th>
           <th>更多操作</th>
         </tr>
        </thead>
        <tbody>
         {inews.map((data, index) => (
           <tr key={data.id}>
             <td>{data.date}</td>
             <td>{data.content}</td>
             <td>
               <button value="删除" data-id={data.id} />
               <Link to={`/companyDetail/${data.cid}`}>企业详情</Link>
             </td>
           </tr>
          ))}
        </tbody>
      </table>
     </div>
  	)
  }

  render() {
  	return (
  	  <div id="inews-main">
  	  {this.renderLeftNav()}
  	  {this.renderSearch()}
  	  {this.renderNewsList()}
  	  </div>
  	)
  }
}

Inews.propTypes = {
  inews: PropTypes.array.isRequired
}