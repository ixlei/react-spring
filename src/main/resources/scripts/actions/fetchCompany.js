'use strict';

import fetch from 'isomorphic-fetch';
import {normalize, Schema, arrayOf} from 'normalizr';
import * as types from '../constants/customerActionType';
import {checkStatus} from '../utils/fetchStatus';
import {constructCompNews} from '../utils/constructUrl';

export function fetchCompanyNews() {
	return dispatch => {
	  dispatch(requestCompany('compNews'));
	  return fetch(constructCompNews())
	    .then(checkStatus)
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
