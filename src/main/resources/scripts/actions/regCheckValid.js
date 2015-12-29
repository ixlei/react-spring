'use strict';

import fetch from 'isomorphic-fetch';
import * as types from '../constants/customerActionType';

export function postCheckValid(checkKind,body) {
  return (dispatch, getState) => {
  	dispatch(post(checkKind));
  	let {reg:{userType}} = getState();
    body.append('userType', userType);
    return fetch('/customer/' + checkKind, {
      method: 'post',
      body,
      credentials: 'include'
    })
    .then(checkSatus)
    .then(response => response.json())
    .then(json => dispatch(receiveCheckInvalid(json)))
    .catch(json => dispatch(failureCheckInvalid(json)));
  }
}

function post(postCheck) {
   return {
     type: types.POST_CHECKVALID,
   	 postCheck
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

function receiveCheckInvalid(entities) {
  return {
  	type: types.RECEIVE_CHECKVALID,
  	entities
  }
}

function failureCheckInvalid(error) {
  return {
  	type: types.FAILURE_CHECKVALID,
  	error
  }
}