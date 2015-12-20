'use strict';

import * as types from '../constants/customerActionType';

const initState = {
<<<<<<< HEAD
  regStep: 0,
  userType: 'investor'
=======
  regStep: 0
>>>>>>> 3e93adb2ae05c6db12b5606074503f489a43b1aa
}

export function reg(state = initState, action) {
  switch(action.type) {
    case types.REGSTEP:
      return Object.assign({}, state, {
      	regStep: action.regStep
      })
<<<<<<< HEAD
    case types.USERTYPE:
      return Object.assign({}, state, {
      	userType: action.userType
      })
=======
>>>>>>> 3e93adb2ae05c6db12b5606074503f489a43b1aa
    default:
      return state;
  }
}