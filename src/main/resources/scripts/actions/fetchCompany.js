'use strict';

import fetch from 'isomorphic-fetch';
import {normalize, Schema, arrayOf} from 'normalizr';
import * as types from '../constants/customerActionType';

export function fetchCompanyNews() {
	return dispatch => {
	  dispatch(requestCompany('compNews'));
	  return fetch('/react-spring/customer/compNews')
	    .then(checkSatus)
	    .then(response => response.json())
	    .then(json => dispatch(receiveCompanyNews(json)))
	    .catch(json => dispatch(failureRequestCompanyNews(json)))
	}
}

function requestCompany(company) {
	return {
		type: types.REQUEST_COMPANY,
		company
	}
}

function receiveCompanyNews(entities) {
	return {
		type: types.RECEIVE_COMPANY,
		entities
	}

}

function failureRequestCompanyNews(entities) {
	return {
		type: types.FAILURE_COMPANY,
		entities
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