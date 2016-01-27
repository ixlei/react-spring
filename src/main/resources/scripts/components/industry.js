'use strict';

import React, {Component, PropTypes} from 'react';

export default class Industry extends Component {
  render() {
  	const industry = ['金融投资', '房地产', '能源', '化学化工', '矿产冶金', '汽车汽配', '批发零售', '收藏品','交通运输', '旅游酒店', '农林牧渔', '批发零售'];
  	return (
  	  <div>
  	    <p>行业:</p>
  	    <div className="selectItemGroup">
  	      {industry.map((data, index) => (
  	      	<span 
              className="selectItem" 
              key={`ind${index}`}>
  	      	  <input 
               type="checkbox" 
              name="investIndustry" 
              value={data} />{data}
  	      	</span>
  	      	))}
  	    </div>
  	  </div>
  	)
  }
}