'use strict';

import * as types from '../constants/customerActionType';

export function regStep(regStep) {
  return {
  	type: types.REGSTEP,
  	regStep
  }
}

export function userType(userType) {
  return {
  	type: types.USERTYPE,
  	userType
  }
}