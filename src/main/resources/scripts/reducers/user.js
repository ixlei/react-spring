'use strict';

import * as types from '../constants/customerActionType';

const initState = {
  userType: 'investor'
}

export function user(state = initState, action) {
  switch(action.type) {
  	case types.USERTYPE:
      return Object.assign({}, state, {
      	userType: action.userType
      });
    default:
      return state;
  }
}