'use strict';

import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import {iagree} from '../actions/reg';

export default class FormCheckbox extends Component {

  change(e) {
   const {dispatch} = this.props;
   dispatch(iagree());
  }

  render() {
  	return (<div>
  	  <label className="label"></label>
      <input type="checkbox" name="iagree"
      value="agree"
      checked={this.props.iagree}
      className="checke" onChange={this.change.bind(this)}/>
      <span>我同意<Link to={"/protopl"} >《网站服务协议》</Link></span>
    </div>
  	) 
  }
}

