'use strict';

import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

export default class Unslider extends Component {
	constructor(props) {
		super(props);
	}

	renderList(list) {
		return (
			<ul>
			  {list.map((data, index) => (
					<li key= {'slider' + index} style=
					{{backgroundImage: 'url(' + '/images/' + data + ')' }}></li>
				))
			}
			</ul>
		)
	}

	renderArrow(arrowData) {
		return (
			arrowData.map((data) => (
				<Link to="javascript:;" className="unslider-arrow next">
					<img src="" />
				</Link>
			))
		)
	}

	render() {
		let {arrowImgUrl, list} = this.props;
		return (
			<div  className="banner">
				{this.renderArrow(arrowImgUrl)}
				{this.renderList(list)}
			</div>
		)
	}
}

Unslider.propTypes = {
	arrowImgUrl: PropTypes.array.isRequired,
	list: PropTypes.array.isRequired
}