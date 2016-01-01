'use strict';

import * as types from '../constants/customerActionType';

const initState = {
  subType: '',
  subSuccess: false,
  isFetching: false,
  text: ''
}

export function subReducer(state = initState, action) {
  switch(action.type) {
  	case types.SUBTYPE:
  	  return Object.assign({}, state, {
  	  	subType: action.subType,
  	  	isFetching: true
  	  })
  	case types.SUBMITSUCCESS:
  	  return Object.assign({}, state, {
  	  	subSuccess: (action.res.post === 'success'),
  	  	isFetching: false,
        text: action.res.post
  	  })
  	case types.FAILURESUBMIT:
  	  return Object.assign({}, state, {
  	  	subSuccess: false,
  	  	isFetching: false
  	  })
  	default:
  	  return state;
  }
}