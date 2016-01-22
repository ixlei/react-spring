'use strict';

import fetch from 'isomorphic-fetch';
import * as types from '../constants/customerActionType';
import {checkStatus} from '../utils/fetchStatus';
import {constructFetchComNews} from '../utils/constructUrl';

export function fetchCompNews(news) {
  return dispatch => {
  	dispatch(requestCompNews(news));
  	return fetch(constructFetchComNews())
  	  .then(checkStatus)
  	  .then(response => response.json())
  	  .then(json => dispatch(receiveCompNews(json)))
  	  .catch(error => dispatch(failureRequest(error)));
  }
    
}

function requestCompNews(newsType) {
  return {
	type: types.REQUEST_COMPNEWS,
	newsType
  }
}

function receiveCompNews(news) {
  return {
  	type: types.RECEIVE_COMPNEWS,
  	news
  }
}

function failureRequest(err) {
	return {
		type: types.FAILURE_COMPNEWS,
		err
	}
}
