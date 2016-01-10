'use strict';

import * as types from '../constants/customerActionType';
import fetch from 'isomorphic-fetch';
import {checkStatus} from '../utils/fetchStatus';

export function fetchUser() {
  return (dispatch, getState) => {
  	const {user:{userType}} = getState();
  	dispatch(requestUser());
  	return fetch(`/${userType}/user`, {
  	  credentials: 'include'
  	})
  	.then(res => checkStatus(res))
  	.then(res => res.json())
  	.then(json => dispatch(receiveUserInfo(json)))
  	.catch(error => dispatch(failureUser(error)))
  }
}

export function userType(userType) {
  return {
  	type: types.USERTYPE,
  	userType
  }
}

function receiveUserInfo(entity) {
  return {
  	type: types.USERINFO,
  	entity
  }
}

function failureUser(error) {
  return {
    type: types.USERINFOFAILURE,
    error
  }
}

function requestUser() {
  return {
  	type: types.REQUESTUSER
  }
}