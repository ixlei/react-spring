'use strict';

import fetch from 'isomorphic-fetch';
import * as types from '../constants/customerActionType';
import {checkStatus} from '../utils/fetchStatus';

export function postCheckValid(checkKind,body) {
  return dispatch => {
  	dispatch(post(checkKind));
    return fetch(`/customer/${checkKind}`, {
      method: 'post',
      body,
      credentials: 'include'
    })
    .then(checkStatus)
    .then(response => response.json())
    .then(json => dispatch(receiveCheckInvalid(getJson(json, checkKind))))
    .catch(err => dispatch(failureCheckInvalid(disErr(err, checkKind))));
  }
}

export function initRegItem() {
  return {
    type: types.INITREGITEM
  }
}

function post(postCheck) {
   return {
     type: types.POST_CHECKVALID,
   	 postCheck
   }
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

function getJson(json, checkKind) {
  return Object.assign(json, {
    checkKind
  });
}

function disErr(err, checkKind) {
  return Object.assign(err, {
    checkKind
  });
}

