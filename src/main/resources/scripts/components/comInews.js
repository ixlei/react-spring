'use strict';

import React, {Component, PropTypes} from 'react';
import ComNewsNav from '../components/comNewsNav';

class ComInews extends Component {
  
  renderLeftNav() {
  	return (<div id="sidebarContainer">
      <p className="sidebarTitle">我的消息</p>
      <ComNewsNav />
    </div>
    )
  }

  renderSearch() {
  	return (<div id="searchForm">
      <input type="search" name="search" />
      <input type="submit" value="搜索" />
	</div>
	)
  }
  
  render() {
  	return (<div id="mainContainer">
      <div id="main-c">
       {this.renderLeftNav()}
       <div id="mainContent">
        {this.renderSearch()}
        {this.props.children}
       </div>
      </div>
    </div>
    )
  }
}

export default ComInews;