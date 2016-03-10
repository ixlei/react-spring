'use strict';

import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

export default class InvestIntroduce extends Component {
  render() {
	return (
	  <div id="service-item">
		<div id="item-management">
		  <p className="title">私募股权</p>
		  <p className="item-describe">
			降低投资者的交易费用 <br />
				提高投资效率 <br /> 
				青睐规模初定的成长企业，多倾向中长期 <br />
				降低财务成本 <br />
				投资退出渠道多样化
		  </p>
		  <div className="other">
			<span className="content_more">
			  <Link to={'/investStock'} style={{color: '#4F4F4F'}}>了解更多</Link>
			</span>
			<span className="content_more_text_1">
			  <Link to={'/investStock'} title="" style={{color: '#4F4F4F', fontSize: '14px'}}>去投资 去融资 </Link>
			</span>
	       </div>
	    </div>
		<div id="item-esignature">
			<p className="title">私募债</p>
			<p className="item-describe">
				便捷高效 <br /> 审批周期快 <br /> 综合融资成本低于信托资金和民间借贷 <br /> 政策贴息 <br />
				期限较长
			</p>
			<div className="other">
				<span className="content_more">
				<Link to={'/investdebt'} style={{color: '#4F4F4F'}}>了解更多</Link></span>
				<span className="content_more_text_1">
				<Link to={'/login'} title=""
					style={{color: '#4F4F4F', 'fontSize': '14px'}}> 去投资 去融资 </Link>
				</span>
			</div>
		</div>
    </div>
	)	
  }
}