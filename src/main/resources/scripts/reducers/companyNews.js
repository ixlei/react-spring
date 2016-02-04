'use strict';

import * as types from '../constants/customerActionType';

const initState = {
	number: 0,
	increaseRate: [],
	companyModel: [],
	isFetching: false,
	invalidate: true,
	fetchType: ''
}

export function compNews(state = initState, action) {
	switch(action.type) {
	  case types.REQUEST_COMPANY:
	    return Object.assign({}, state, {
	      isFetching: true,
	      invalidate: true,
	      fetchType: action.fetchType
	    })
	  case types.RECEIVE_COMPANY:
	    const {entities: {number, increaseRate}} = action;
	    return Object.assign({}, state, {
	    	number,
	    	increaseRate,
	    	invalidate: false,
	    	isFetching:false
	    })
	  case types.FAILURE_COMPANY:
	    return Object.assign({}, state, {
	      isFetching: false,
	      invalidate: true
	    })
      case types.FETCHFINANCE:
        const {entity: {comInfo}} = action;
        return Object.assign({}, state, {
          isFetching: false,
          invalidate: false,
          companyModel: comInfo
        })
	  default:
	    return state;
	}
}
