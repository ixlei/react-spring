'use strict';

import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

export default class ListItem extends Component {
	render() {
		return (
			<ul>
			    {this.props.list.map((list, index) => (
				<li key={list.addr}>
					<Link to={list.addr}><span>{list.text}</span>
					</Link>
				</li>
				))
			}
			</ul>
		);
	}
}

ListItem.propTypes = {
	list: PropTypes.array.isRequired
};