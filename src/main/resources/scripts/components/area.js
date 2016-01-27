'use strict';

import React, {Component, PropTypes} from 'react';

export default class Area extends Component {

  render() {
  	const area = ['北京', '辽宁', '黑龙江', '吉林', '内蒙古', '云南','四川', '贵州', '湖南', '湖北', '河北'];
  	return (
  	  <div>
  	   <p>地区</p>
  	   <div className="selectItemGroup">
  	     {area.map((data, index) => (
  	       <span 
             className="selectItem" 
             key={`area${index}`}>
             <input 
              type="checkbox" 
              name="investArea" 
              value={data} />
              {data}
           </span>
  	      ))}
  	   </div>
  	  </div>
  	)
  }
}