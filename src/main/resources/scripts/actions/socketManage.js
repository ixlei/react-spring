'use strict';

import fetch from 'isomorphic-fetch';
import * as types from '../constants/customerActionType';
import {checkStatus} from '../utils/fetchStatus';
import {constructSocketUrl, constructSocketSearchUrl} 
from '../utils/constructUrl';

export function fetchSocket(socketType) {
  return (dispatch, getState) => {
  	dispatch(reqSocket(socketType));
    const {user:{userType}, socket:{socketTime}} = getState();
    return fetch(constructSocketUrl({userType, socketType, socketTime}), {
      credentials: 'include'
    })
    .then(response => checkStatus(response))
    .then(res => res.json())
    .then(json => dispatch(receiveSocket(json)))
    .catch(err => dispatch(failureSocket(err)));
  }
}

export function fetchByQuery(query) {
  return (dispatch, getState) => {
  	const {user:{userType}, socket:{socketTime, socketType}} = getState();
    return fetch(constructSocketSearchUrl(
    	{userType, socketType, socketTime, query}), {
      credentials: 'include'
    })
    .then(response => checkStatus(response))
    .then(res => res.json())
    .then(json => dispatch(receiveSocket(json)))
    .catch(err => dispatch(failureSocket(err)));
  }
}

export function socketTime(time) {
  return {
  	type:types.SOCKETTIME,
  	time
  };
}

function reqSocket(investType) {
  return {
  	type: types.REQSOCKET,
    investType
  };
}

function receiveSocket(entity) {
  return {
  	type: types.RECEIVESOCKET,
  	entity
  };
}

function failureSocket(err) {
  return {
  	type: types.FAILURESOCKET,
  	err
  };
}

function search(query) {
  return {
  	type: types.SOCKETSEARCH,
  	query
  }
}

