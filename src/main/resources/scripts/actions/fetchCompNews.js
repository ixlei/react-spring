'use strict';

import fetch from 'isomorphic-fetch';
import * as types from '../constants/customerActionType';

export function fetchCompNews(news) {
  return dispatch => {
  	dispatch(requestCompNews(news));
  	return fetch('/customer/getCompNews')
  	  .then(checkSatus)
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

function checkSatus(response) {
	if(response.status >= 200 && response.status < 300 || 
		response.status === 304) {
		return response;
	}

	let error =  new Error(response.statusText);
	error.response = response;
	throw error;
}
