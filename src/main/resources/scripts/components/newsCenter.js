'use strcit';

import React, {Component, PropTypes} from 'react';
import NewsLeftNav from './newsLeftNav';
import {Link} from 'react-router';
import {fetchNews} from '../actions/news';
import {activeIndex} from '../actions/navHeader';

export default class NewsCenter extends Component {
  
  componentDidMount() {
    const {dispatch} = this.props;
    const {newsType, index} = this.props.params;
    dispatch(activeIndex(index));
    dispatch(fetchNews(newsType));
  }
  
  componentWillUnmount() {
    const {dispatch} = this.props;
    dispatch(activeIndex(-1));
  }
  
  getTitle(type) {
    switch(type) {
      case 'infoCenter':
       return '中心报告';
      case 'privateDebtList':
        return '私募债列表';
      case 'infoRecords':
        return '备案发行公告';
      case 'infoTransform':
        return '转让交易公告';
      case 'infoRegular':
        return '定期报告';
      case 'infoTemporary':
        return '临时报告';
      case 'infoCredit':
        return '信用报告';
      default :
       return '中心报告'
    }
  }

  renderLeftNav() {
  	const {newsType} = this.props.params;
    return (<div className="nav fl">
      <div className="tit ">
        <p>{this.getTitle(newsType)}</p>
      </div>
      <div className="tri">
      </div>
      <div className="tri1">
      </div>
      <NewsLeftNav />
     </div>
    )
  }
  
  renderSiteNav() {
  	const {newsType} = this.props.params;
  	return (
  	 <div className="main_head">
       <p>{this.getTitle(newsType)}</p>
       <div className="search">
         <form name="news">
          <input type="search" className="input" placeholder="搜索" />
          <button className="search_button">&nbsp;&nbsp;&nbsp;搜索</button>
         </form>
        </div>
     </div>
  	)
  }
  
  renderNewShow() {
  	const {news} = this.props;
  	return (<div className="main_content">
  	  <ul>
  	   {news.map((data, index) => (
  	     <li key={data.id}>
           <Link to={`/news/${data.id}`}>{data.text}</Link>
         </li>
  	   ))}
  	  </ul>
  	 </div>
  	)
  }

  render() {
  	return (<div id="content">
  	  <div className="swap">
  	    {this.renderLeftNav()}
  	  </div>
  	  <div className="main fl">
  	    {this.renderSiteNav()}
  	    {this.renderNewShow()}
  	  </div>
  	</div>
  	)
  }

}

NewsCenter.propTypes = {
  news: PropTypes.array.isRequired
}