'use strict';

import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import {socketTime, fetchSocket} from '../actions/socketManage';
import {activeIndex} from '../actions/navHeader';
import Socket from './socket';

export default class ManageSiteNav extends Component {
  query(e) {
    e.preventDefault();
    console.log(this.refs.search.value);
  }
  
  querySocketTime(e) {
    const {dispatch, params: {investType}} = this.props;
    dispatch(socketTime(e.target.value));
    dispatch(fetchSocket(investType))
  }
  
  componentDidMount() {
    const {dispatch, params: {index, investType}} = this.props;
    dispatch(activeIndex(index));
    dispatch(fetchSocket(investType))
  }

  renderTimeSelect() {
  	const {investTime} = this.props;
  	return (
  	  <div id="filter">
        <p>筛选条件</p>
        <div>
          <form>
            <span>发布时间：</span>
            <input id="one-month" value="one-month"
              type="radio" name="socketTime"
              checked={investTime === 'one-month'} 
              onChange={this.querySocketTime.bind(this)}/>
            <label for="one-month">近一个月</label>
            <input id="three-month" value="three-month"
             type="radio" 
             name="socketTime" 
             checked={investTime === 'three-month'}
             onChange={this.querySocketTime.bind(this)}/>
            <label for="three-month">近三个月</label>
            <input id='six-month' value="six-month"
             type="radio" 
             name="socketTime" 
             checked={investTime === 'six-month'}
             onChange={this.querySocketTime.bind(this)}/>
            <label for="six-month">近六个月</label>
            <input id='one-year' value="one-year"
             type="radio" 
             name="socketTime" 
             checked={investTime === 'one-year'}
             onChange={this.querySocketTime.bind(this)}/>
            <label for="one-year">近一年</label>
            <input id='two-year' 
              type="radio" value="two-year"
              name="socketTime"
              checked={investTime === 'one-year'}
              onChange={this.querySocketTime.bind(this)}/>
            <label for="two-year">近两年</label>
            <input id='any' value="any"
             type="radio" name="socketTime" 
             checked={investTime === 'one-year'}
             onChange={this.querySocketTime.bind(this)}/>
            <label for="any">所有</label>
         </form>
        </div>
     </div>
  	)
  }

  renderMangeNav() {
  	const {params:{investType}, userType} = this.props;
    let investSpan = <span className={
          investType === 'invest' 
          ? 'curentActive stock-tab' 
          : 'stock-tab' }>
          <Link to={"/investor/manage/invest"}>投资概况</Link>
        </span>
    let span = userType === 'investor' ? investSpan : '';
     
  	return (
  	  <div id="nav">
  	   {span}
		<span className={
      investType === 'stockManage' 
		  ? 'curentActive stock-tab' 
		  : 'stock-tab' }>
		  <Link to={`/${userType}/manage/stock`}>股权管理</Link>
		</span>
		<span
	      className={
        investType === 'stockRightManage' 
	      ? 'curentActive stock-tab' 
	      : 'stock-tab' }>
		  <Link to={`/${userType}/manage/stockRight`}>债权管理</Link>
		</span>
		<span id="search">{this.renderSearch()}</span>
   </div>
  	)
  }

  renderSearch() {
  	return (
  	  <form className="search-from investor-search" name="search" 
  	  onSubmit={this.query.bind(this)}>
		  <label for="search-content">搜索:</label>
		  <input type="search" id="search-content" ref="search"/>
		  <input type="submit" value="搜索" />
     </form>
  	)
  }

  render() {
    const {sockets, userType, params:{investType}} = this.props;
    const socketProps = {sockets, userType, investType};
    return (<div id="main">
      <div id="nav-boder">
      {this.renderMangeNav()}
      <div id="selected1">投资概况</div>
      {this.renderTimeSelect()}
      <Socket {...socketProps}/>
      </div>
    </div>
    )
  }
}

ManageSiteNav.propTypes = {
  investType: PropTypes.string.isRequired,
  userType: PropTypes.string.isRequired,
  socketTime: PropTypes.string.isRequired,
  params: PropTypes.object.isRequired
}