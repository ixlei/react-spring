'use strict';

import * as types from '../constants/customerActionType';

const initState = {
  isFetching: false,
  validate: false,
  newsType: '',
  news: [],
  error: ''
}

export function news(state = initState, action) {
  switch(action.type) {
  	case types.FETCHNEWS:
  	 return Object.assign({}, state, {
  	   isFetching: true,
       validate: false,
       newsType: action.newsType
  	 })
  	case types.RECEIVENEWS:
  	  return Object.assign({}, state, {
  	    isFetching: false,
        validate: true,
        news: action.entity
  	  })
  	case types.FAILURENEWS:
  	  return Object.assign({}, state, {
  	  	isFetching: false,
        validate: false
  	  })
  	default:
  	  return state;
  }
}