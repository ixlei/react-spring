'use strict';

import React, {Component, PropTypes} from 'react';
import Unslider from './unslider';
import {Link} from 'react-router';
import {activeIndex} from '../actions/navHeader';
import NewsConatiner from '../containers/listNewsContainer';

export default class InvestorIndex extends Component {
  
  componentDidMount() {
    const {dispatch} = this.props;
    dispatch(activeIndex(0))
  }
  
  componentWillUnmount() {
    const {dispatch} = this.props;
    dispatch(activeIndex(-1));
  }
  
  renderPushList() {
  	const {arrowImgUrl, unsliderLeft, unsliderRight} = this.props;
  	return (
  	  <div id="invest-center">
  	    <div id="inv-title">
          <p id="inv-title">推荐行业</p>
        </div>
        <div id="invest-list">
          <div id="left-banner">
            <p>行业一</p>
            <Unslider list={unsliderLeft} arrowImgUrl={arrowImgUrl}/>
            <div className="invest-more">
              <span><Link to={'/investor/investModel'}>查看更多行业></Link></span>
            </div>
          </div>
          <div id="right-banner">
            <p>行业二</p>
            <Unslider list={unsliderRight} arrowImgUrl={arrowImgUrl}/>
            <div className="invest-more">
              <span><Link to={'/investor/investModel'}>查看更多行业></Link></span>
            </div>
          </div>
        </div>
      </div>
  	)
  }
  
  rendernews() {
    return (
      <div id="news">
        <p id="zixun">资讯</p>
	      <NewsConatiner />
      </div>
    )
  }

  render() {
  	const {arrowImgUrl,unsliderTop} = this.props;
  	return (
  	  <div id="content">
  	    <Unslider arrowImgUrl={arrowImgUrl} list={unsliderTop}/>
  	    {this.renderPushList()}
  	    {this.rendernews()}
  	  </div>
  	)
  }
}

InvestorIndex.propTypes = {
  arrowImgUrl: PropTypes.arrayOf(PropTypes.string).isRequired,
  unsliderTop: PropTypes.arrayOf(PropTypes.string).isRequired,
  unsliderRight: PropTypes.arrayOf(PropTypes.string).isRequired,
  unsliderLeft: PropTypes.arrayOf(PropTypes.string).isRequired
}