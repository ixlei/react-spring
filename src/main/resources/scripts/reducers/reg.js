'use strict';

import * as types from '../constants/customerActionType';

const initState = {
  regStep: 0,
  userType: 'investor'
}

export function reg(state = initState, action) {
  switch(action.type) {
    case types.REGSTEP:
      return Object.assign({}, state, {
      	regStep: action.regStep
      })
    case types.USERTYPE:
      return Object.assign({}, state, {
      	userType: action.userType
      })
    default:
      return state;
  }
}