'use strict';

import * as types from '../constants/customerActionType';

const initState = {
  isFetching: false,
  validate: false,
  socket:[],
  err:'',
  investType: 'any'
}

export function socket(state = initState, action) {
  switch(action.type) {
  	case types.REQSOCKET:
  	  return Object.assign({}, state, {
  	    isFetching: true,
        validate: false,
        investType: action.investType
  	  })
  	case types.RECEIVESOCKET:
  	  const {entity:{res, socket}, entity} = action;
  	  return res === 'success'
  	  ? Object.assign({}, state, {
        isFetching: false,
        validate: true,
        socket
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
  	default:
  	  return state;
  }
}