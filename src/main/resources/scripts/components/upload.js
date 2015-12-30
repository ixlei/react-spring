'use strict';

import React, {Component, PropTypes} from 'react';

export default class Upload extends Component {
  
  imagePromise(file) {
  	let fr = new FileReader();
    return new Promise(function(resolve, reject) {
       fr.readAsDataURL(file);
       fr.onload = function() {
       	  resolve(fr.result);
       }

       fr.onerror = function() {
       	 reject('error');
       }
    })
  }
  
  change(e) {
    let file = e.target.files[0];
    let self = this;
    this.imagePromise(file).then(function(res) {
      self.refs.imageShow.src = res;
    }, function(err) {
      
    })
  }

  render() {
    return (
      <div id="upload">
		<div id="title">
		  <p>企业/个人表示(LOGO)</p>
		</div>
	    <div id="logo-show">
	      <span><img src="" ref="imageShow"/></span>
	    </div>
		<div id="file">
		  <span id="text">上传图片</span>
		  <input type="file" name="image" onChange={this.change.bind(this)} />
	    </div>
	 </div>
    )
  }
}