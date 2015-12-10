'use strict';

import React, {Component, PropTypes} from 'react';

export default class ListItem extends Component {
	construct(props) {
		super(props);
	}

	render() {
		return (
			<ul>
			    {this.props.list.map((list, index) => {
				<li key={list.addr}>
					<Link to=
					{'/rs/' + this.props.userType + '/' + list.addr }>
					<span>{list.text}</span>
					</Link>
				</li>
				 });
			 }
			</ul>
		);
	}
}

ListItem.propTypes = {
	list: PropTypes.array.isRequired
};