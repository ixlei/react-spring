'use strict';

import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import {fetchNews} from '../actions/news';

class NewsRelease extends Component {
  
  componentDidMount() {
    const {dispatch} = this.props;
    dispatch(fetchNews('release'));
  }
 
  render() {
  	const {news} = this.props;
  	return (<div id="TableList">
      <div className="main_content">
        <ul>
         {news.map((data, index) => (
           <li>
            <Link to={`/news/${data.id}`}>{data.title}</Link>
           </li>
          ))}
        </ul>
      </div>
    </div>
    )
  }
}

NewsRelease.propTypes = {
  news: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  validate: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired
}

export default NewsRelease;