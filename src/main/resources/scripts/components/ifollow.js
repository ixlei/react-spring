'use strict';

import React, {Component, PropTypes} from 'react';
import FormSelect from './FormSelect';

export default class Ifollow extends Component {
   
  search(e) {
  	e.preventDefault();
  	console.log(this.refs.search)
  }

  renderSearch() {
  	return (
  	  <div className="search">
  	    <form onSubmit={this.search.bind(this)}>
	     <input type="search" placeholder="搜一下伐" ref="search"/>
	     <input type="submit" value="搜索" />
	    </form>
      </div>
  	)
  }
  
  renderSort() {
  	let labelText = '排序',
  	 name = 'sort', 
  	 options = [{
      value: 'time',
      text: '按时间排序'
  	 }, {
  	 	value: 'address',
  	 	text: '按地点排序'
  	 }, {
  	 	value: 'credit',
  	 	text: '按信用排序'
  	 }, {
  	 	value: 'mount',
        text: '按规模排序'
  	 }]
  	const selectProps = {labelText, name, options};
  	return (<div className="sort">
	  <dl className="select">
	    <form>
	      <FormSelect {...selectProps} />
	    </form>
	  </dl>
	</div>
  	)
  }

  renderIfollow() {
  	const {followers} = this.props; 
    return (<div>
      <table cellSpacing ={0} cellPadding ={0}>
        <thead>
		  <tr>
			<th>公司名称</th>
			<th>关注状态</th>
			<th>发布产品</th>
			<th>产品类型</th>
			<th>更多操作</th>
		  </tr>
	    </thead>
	    <tbody>
	    {followers.map((data,index) => (
	       <tr key={data.id}>
	         <td>{data.companyName}</td>
	         <td>{data.followersState}</td>
	         <td>{data.product}</td>
	         <td>{data.productType}</td>
	         <td>
			   <button className="private_letter" 
			    data-cid={data.id}>私信</button>
			 </td>
	       </tr>
	     ))}
	    </tbody>
	  </table>
    </div>
    )
  }

  render() {
  	return (<div className="wrap">
      <p className="title">我关注的</p>
      <div className="siteNav">
       {this.renderSort()}
       {this.renderSearch()}
      </div>
       {this.renderIfollow()}
  	 </div>
  	)
  }
}

Ifollow.propTypes = {
  followers: PropTypes.array.isRequired
}