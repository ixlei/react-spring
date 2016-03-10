'use strict';

import * as types from '../constants/customerActionType';

const initState = {
	number: 0,
	increaseRate: [],
	companyModel: [],
	capital:{
	  dataSet: [],
	  tipsColor: []
	},
	dataSet: [],
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
	    const {entities: {number, increaseRate, dataSet}} = action;
	    console.log(dataSet);
	    return Object.assign({}, state, {
	    	number,
	    	increaseRate,
	    	capital:{dataSet},  
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
      case types.DATASETTIPSCOLORS:
        return Object.assign({}, state, {
          capital: {tipsColor: action.tipsColor}
        })
	  default:
	    return state;
	}
}
