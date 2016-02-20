'use strict';
import fetch from 'isomorphic-fetch';
import * as types from '../constants/customerActionType';

export function subAction(arg) {
   const {action, body, subType} = arg;
   return (dispatch) => {
   	 dispatch(submitType(subType));
   	 return fetch(action, {
   	 	method: 'post',
   	 	body,
   	 	credentials: 'include'
   	 }).then(checkSatus)
   	   .then(response => response.json())
       .then(json => {dispatch(submitSuccess(json))})
       .catch(error => {dispatch(failureSubmit(error))
     })
   }
}

function submitType(subType) {
  return {
  	type: types.SUBTYPE,
  	subType
  };
}

function checkSatus(response) {
	if(response.status >= 200 && response.status < 300 || 
		response.status === 304) {
		return response;
	};
	let error =  new Error(response.statusText);
	error.response = response;
	throw error;
}

export function submitSuccess(res) {
  return {
  	type: types.SUBMITSUCCESS,
  	res
  };
}

export function failureSubmit(error) {
  return {
  	type: types.FAILURESUBMIT,
  	error
  };
}

export function initSub() {
  return {
    type: types.INITSUBMIT
  };
}