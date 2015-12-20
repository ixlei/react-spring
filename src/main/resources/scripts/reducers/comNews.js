'use strict';

import * as types from '../constants/customerActionType';

const initState = {
	newsType: 'any',
	isFetching: false,
	invalidate: true,
	news: {}
}

export function getNews(state = initState, action) {
  switch(action.type) {
  	case types.REQUEST_COMPNEWS:
      return Object.assign({}, state, {
    	newsType: action.newsType,
    	isFetching: true
    })

    case types.RECEIVE_COMPNEWS: 
      return Object.assign({}, state, {
      	isFetching: false,
      	invalidate: false,
      	news: action.news,
      })

    case types.FAILURE_COMPNEWS:
      return Object.assign({}, state, {
      	isFetching: false,
        invalidate: true,
      })

    default: 
      return state;
  }
}