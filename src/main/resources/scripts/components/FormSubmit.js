'use strict';

import React, {Component, PropTypes} from 'react';

export default class FormSubmit extends Component {

  render() {
  	return (<div>
  	  <span className="label"></span>
      <input type="submit" value="下一步" 
      disabled={this.props.ready} />
     </div>
  	)
  }
}

FormSubmit.propTypes = {
  ready: PropTypes.bool.isRequired
}

