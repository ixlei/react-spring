'use strict';

import React, {Component, PropTypes} from 'react';
import ComNewsNav from '../components/comNewsNav';
import FormSearch from './FormSearch';

class ComInews extends Component {
  
  renderLeftNav() {
  	return (<div id="sidebarContainer">
      <p className="sidebarTitle">我的消息</p>
      <ComNewsNav />
    </div>
    )
  }
  
  render() {
  	return (<div id="mainContainer">
      <div id="main-c">
       {this.renderLeftNav()}
       <div id="mainContent">
        <FormSearch />
        {this.props.children}
       </div>
      </div>
    </div>
    )
  }
}

export default ComInews;