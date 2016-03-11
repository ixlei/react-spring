'use strict';

import React, {Component, PropTypes} from 'react';
import {fetchCompanyNews} from '../actions/fetchCompany';
import CountScroll from '../components/countScroll';
import IncreaseRate from '../components/increaseRate';
import PieData from '../components/pie';

class CompNews extends Component {
    componentDidMount() {
      const { dispatch} = this.props;
      dispatch(fetchCompanyNews());
    }

    renderDataSet() {
      let {dataSet, tipsColor, dispatch} = this.props;
      let svg = {
        width : 160,
	    height : 160,
		text : {
		  title : '资本分布'
		}
      },
      arc = {innerWidth : 40, outerWidth : 70};
      
      return (<PieData 
		   g={{}} 
		   dataSet={dataSet} 
		   arc={arc} 
		   svg={svg} 
		   tipsColor={tipsColor} 
		   dispatch={dispatch} />
		)
    }

    drawTips() {
      let tips = ['200万以下', '100万~200万', '200万~500万', '500万~1000万', '1000万以上'];
  	  let {tipsColor} = this.props;
      return (<ul>
        {tipsColor.map((color, index) => {
          return (<li key={`color${index}`}>
      	    <span className="data-tips" style={{color: color}}></span>
      	    <span className="data">{tips[index]}</span>
		  </li>)
      	  })
        }
      </ul>
     )
    }

	render() {
	  let {rate, count} = this.props;
	  return (<div id="data-show">
	    <div id="reg-num">
		  <p className="data-show--title">当前注册企业总数</p>
	    　<div id="num-show">
		  　<CountScroll count={count} />
		    <span>家</span>
		　</div>
		</div>
		<div id="rise-speed">
		  <p className="data-show--title">注册企业增长情况</p>
		  <div id="show-area">
			<IncreaseRate rate={rate}/>
		  </div>
		</div>
		<div id="circle">
		  <div id="circle-data">
		   {this.drawTips()}
		   {this.renderDataSet()}
		  </div>
		</div>
	  </div>
	  )
	}
}

CompNews.propTypes = {
  rate: PropTypes.array.isRequired,
  count: PropTypes.number.isRequired,
  dataSet: PropTypes.array.isRequired,
  tipsColor: PropTypes.array.isrequired
};
