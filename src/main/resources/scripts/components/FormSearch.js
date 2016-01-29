'use strict';

import React, {Component, PropTypes} from 'react';

class FormSearch extends Component {
  render() {
  	return (<div id="searchForm">
     <form>
      <input type="search" name="search" />
      <input type="submit" value="搜索" />
     </form>
	</div>
	)
  }
}

export default FormSearch;
