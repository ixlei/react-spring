'use strict';

import React, {Component, PropTypes} from 'react';

export default class IncreaseRate extends Component {
	render() {
		return (
		<ul className="line-list">
			{this.props.rate.map((data, index) => (
			  <li key={'rate' + index}>
				  <p>{data.time}</p>
				  <div className="data-image">
				    <img src={'/images/' + data.iconUrl} />
				  </div>
					<p className="speed">增长率:{data.rate}%</p>
				</li>
			))

			}
		</ul>
		)
	}
}

IncreaseRate.propTypes = {
	rate: PropTypes.array.isRequired
}

