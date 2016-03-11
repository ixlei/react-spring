'use strict';

import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {fetchCompNews} from '../actions/news';
import ListNews from '../components/listNews';

class NewsConatiner extends Component {

	componentDidMount() {
       const {dispatch} = this.props;
       dispatch(fetchCompNews('comNews'))
	}
    
    scrollCallback() {
      let flag = 0,
          distance = 0,
          arrDistance = Array.of(0, 0);
      return (scrollHeight, speedUp) => {
        let {firstScroll, secondScroll} = this.refs;
        distance -= 4;
        arrDistance[0] = distance;
        arrDistance[1] = scrollHeight + distance;
        if ((scrollHeight + distance) === 0) {
            distance = 0;
            flag += 1;
            setTimeout(function() {
              firstScroll.style.top = arrDistance[flag % 2] + 'px';
              secondScroll.style.top = arrDistance[(flag + 1) % 2] + 'px';
            }, speedUp);
            flag = flag % 2 === 0 ? 0 : 1;
        }
        firstScroll.style.top = arrDistance[flag % 2] + 'px';
        secondScroll.style.top = arrDistance[(flag + 1) % 2] + 'px';
      }
    }

    scrollEle() {
      
    }
    
	render() {
	  return (
	  	<div id="news-area">
		  <ul>
			<li>
			  <div className="title-nav">
				<span>政策资讯</span>
				<span className="more"><Link to={'/more'}>更多</Link></span>
			  </div>
			  <div id="policy-item">
			    <div id="lf">
				  <ListNews news= {this.props.policy} />
				</div>
				<div id="ls">
				  <ListNews news= {this.props.policy} />
				</div>
               </div>
			</li>
			<li>
			  <div className="title-nav">
			    <span>市场资讯</span>
				<span className="more"><Link to={'/more'}>更多</Link></span>
			  </div>
			  <div id="market-item">
			    <div id="rf">
			      <ListNews news= {this.props.market} />
				</div>
				<div id="rs">
				  <ListNews news= {this.props.market} />
				</div>
			   </div>
			</li>
		</ul>
	</div>
	)
	}
}

function mapStateToProps(state) {
  const {news: {validate, isFetching, news, newsType}} = state;
  let cn = newsType === 'comNews' && validate;
  const [policy, market] = cn ? news  : [[],[]];
  return {
	policy,
	market,
	validate,
	isFetching
  };
}


export default connect(mapStateToProps)(NewsConatiner);