'use strict';

import * as types from '../constants/customerActionType';

const initState = {
  isFetching: false,
  validate: false,
  sockets:[],
  err:'',
  fetchType: 'fetch',
  investType: 'any',
  investTime: 'any',
  searchQuery: ''
}

export function socket(state = initState, action) {
  switch(action.type) {
  	case types.REQSOCKET:
  	  return Object.assign({}, state, {
  	    isFetching: true,
        validate: false,
        fetchType: 'fetch',
        investType: action.investType
  	  })
  	case types.RECEIVESOCKET:
  	  const {entity:{res, sockets}, entity} = action;
  	  return res === 'success'
  	  ? Object.assign({}, state, {
        isFetching: false,
        validate: true,
        sockets
  	  })
  	  : Object.assign({}, state, {
        isFetching: false,
        validate: false,
        err: '稍后再试'
  	  })
  	case types.FAILURESOCKET:
  	  return Object.assign({}, state, {
  	    isFetching: false,
        validate: false,
        err: action.err
  	  })
  	case types.SOCKETTIME:
  	  return Object.assign({}, state, {
  	  	investTime: action.time
  	  })
  	case types.SOCKETSEARCH:
  	  return Object.assign({}, state, {
  	  	fetchType: 'search',
  	  	isFetching: true,
        validate: false
  	  })
  	default:
  	  return state;
  }
}