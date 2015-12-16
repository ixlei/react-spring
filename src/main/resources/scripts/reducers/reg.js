'use strict';

import * as types from '../constants/customerActionType';

const initState = {
  regStep: 0
}

export function reg(state = initState, action) {
  switch(action.type) {
    case types.REGSTEP:
      return Object.assign({}, state, {
      	regStep: action.regStep
      })
    default:
      return state;
  }
}