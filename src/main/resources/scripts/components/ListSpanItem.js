'use strict';

import React, {Component, PropTypes} from 'react';

export default class ListSpanItem extends Component {
	render() {
		return (
			<ul className="list-item">
				{this.props.list.map((data, index) => (
 				  <li key={'list' + index}>
 				    <span>{data}</span>
 				  </li>
				))
				}
			</ul>
		)
	}
}

ListSpanItem.propTypes = {
	list: PropTypes.array.isRequired
}