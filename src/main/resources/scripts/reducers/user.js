'use strict';

import * as types from '../constants/customerActionType';

const initState = {
  userType: 'investor',
  validate: false,
  isFetching: false
}

export function user(state = initState, action) {
  switch(action.type) {
  	case types.USERTYPE:
      return Object.assign({}, state, {
      	userType: action.userType
      });
    case types.REQUESTUSER:
      return Object.assign({}, state, {
      	isFetching: true
      })
    case types.USERINFO:
      const {entity:{res}, entity} = action;
      return res === 'success'
      ? Object.assign({}, state, entity.data, {
      	validate: true,
      	isFetching: false
      }) : Object.assign({}, state, {
      	validate: false,
      	isFetching: false
      })
      
    default:
      return state;
  }
}