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

export function isFocus(IsFocus) {
  return {
  	type: types.ISFOCUS,
  	IsFocus
  }
}

export function itemTips(tips) {
  return {
  	type: types.ITEMTIPS,
  	tips
  }
}

export function itemInvalid(invalid) {
  return {
  	type: types.ITEM_INVALID,
  	invalid
  }
}

export function iagree() {
  return {
  	type: types.AGREE
  }
}