'use strict';

import * as types from '../constants/customerActionType';

export function regStep(regStep) {
  return {
  	type: types.REGSTEP,
  	regStep
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

export function itemInvalid(entity) {
  return {
  	type: types.ITEM_INVALID,
  	entity
  }
}

export function iagree() {
  return {
  	type: types.AGREE
  }
}

export function initRegItem() {
  return {
    type: types.INITREGITEM
  }
}

export function initItemInvalid(checkKind) {
  return {
    type: types.INITITEMVALID,
    checkKind
  }
}