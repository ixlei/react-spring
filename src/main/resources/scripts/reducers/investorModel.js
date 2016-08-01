'use strict';

import * as types from '../constants/customerActionType';

const initState = {
  modelType: 'any',
  data: [],
  isFetching: false,
  success: false,
  error: ''
};

export function investorModel(state = initState, action) {
  switch(action.type) {
  	case types.REQUEST_INVESTORMODEL:
      return Object.assign({}, state, {
      	modelType: action.modelType,
      	isFetching: true
      });
    case types.RECEIVE_INVESTORMODEL:
      const {entity: {res, data}} = action;
      if(res === 'success') {
      	return Object.assign({}, state, {
      	 data: data,
      	 isFetching: false,
      	 success: true
       })
      }
      return Object.assign({}, state, {
        isFetching: false,
        error: 'error'
      });
    case types.FAILURE_INVESTORMODEL:
      return Object.assign({}, state, {
        isFetching: false,
        error: 'error'
      });
    default: 
      return state;
  }
}