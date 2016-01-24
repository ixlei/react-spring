'use strict';

import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

export default class Socket extends Component {

  renderSocketList() {
  	const {sockets, userType} = this.props;
  	return (<div id="content">
      {sockets.map(data => (
      	<Link to={`/${userType}/manage/${data.id}`}>
      	 <div className="list-text" key={data.id}>
           <p>公司名称:{data.companyName}</p>
           <div>
            <span>所在地：{data.registerAddress}</span>
            <span>份额：{data.count}</span>
            <span>投入资金额：{data.money}万</span>
           </div>
         </div>
        </Link>
      	))
      }
    </div>
  	)
  }

  renderSocketChart() {
  	return (<div id="image">
      <img src="/images/socket-manage.png" />
    </div>)
  }

  render() {
  	const {investType} = this.props;
  	return (<div id="condition-list">
       <p id="subtitle">股权状况分布</p>
       <div id="list-item">
        <div id="content">{this.renderSocketList()}</div>
        {investType === 'invest' ? this.renderSocketChart() : ''}
       </div>
    </div>
    )
  }
}

Socket.propTypes = {
  sockets: PropTypes.array.isRequired,
  userType: PropTypes.string.isRequired,
  investType: PropTypes.string.isRequired
}