'use strict';

import * as types from '../constants/customerActionType';

export function activeIndex(index) {
  return {
  	type: types.ACTIVE_INDEX,
  	index
  };
}