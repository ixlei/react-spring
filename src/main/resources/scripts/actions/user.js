'use strict';

import * as types from '../constants/customerActionType';
import fetch from 'isomorphic-fetch';
import {checkStatus} from '../utils/fetchStatus';
import {constructUserUrl, constructChatUrl} from '../utils/userUrl';
import {constructIfollerUrl} from '../utils/constructUrl';

export function fetchUser() {
  return (dispatch, getState) => {
  	const {user:{userType}} = getState();
  	dispatch(requestUser());
  	return fetch(constructUserUrl(userType), {
  	  credentials: 'include'
  	})
  	.then(res => checkStatus(res))
  	.then(res => res.json())
  	.then(json => dispatch(receiveUserInfo(json)))
  	.catch(error => dispatch(failureUser(error)))
  }
}

export function fetchFriends() {
  return (dispatch, getState) => {
    const {user:{userType}} = getState();
    dispatch(requestFriends());
    return fetch(constructChatUrl(userType), {
      credentials: 'include'
    })
    .then(res => checkStatus(res))
    .then(res => res.json())
    .then(json => dispatch(receiveFriends(json)))
    .catch(err => dispatch(failureFriends(err)))
  }
}

export function userType(userType) {
  return {
  	type: types.USERTYPE,
  	userType
  };
}

function receiveUserInfo(entity) {
  return {
  	type: types.USERINFO,
  	entity
  };
}

function failureUser(error) {
  return {
    type: types.USERINFOFAILURE,
    error
  };
}

function requestUser() {
  return {
  	type: types.REQUESTUSER
  };
}

function requestFriends() {
  return {
    type: types.REQUESTFRIENDS
  };
}

function receiveFriends(entity) {
  return {
    type: types.RECEIVEFRIENDS,
    entity
  };
}

function failureFriends(error) {
  return {
    type: types.FAILUREFRIENDS,
    error
  };
}