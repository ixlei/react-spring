'use strict';

import React, {Component, PropTypes} from 'react';
import ListSpanItem from './listSpanItem';

export default class InvestotTitle extends Component {
	defaultProps() {
		return {
			ll: ['降低投资者的交易费用', 
			  '提高投资效率',
			  '青睐规模初定的成长企业，多倾向中长期',
			  '降低财务成本',
			  '投资退出渠道多样化'
			],
			lr: ['便捷高效',
			  '审批周期快',
			  '综合融资成本低于信托资金和民间借贷',
			  '期限较长',
			  '政策贴息'
			]
		}
	}

	render() {
		let defaultProps = this.defaultProps();
		return (
			<ul id="invest-list">
			  <li className="invest-list--list">
			    <p>私募股权</p>
			    <ListSpanItem list={defaultProps.ll} />
			  </li>
			  <li className="invest-list--list">
			    <p>私募债</p>
			    <ListSpanItem list={defaultProps.lr} />
			  </li>
			</ul>
		)
	}
}


