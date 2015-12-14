"use strict";
import * as types from '../constants/customerActionTypes';

export function activeIndex(index) {
  return {
  	type: types.ACTIVE_INDEX,
  	index
  };
}