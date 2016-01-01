'use strict';

import * as types from '../constants/customerActionType';

export function userType(userType) {
  return {
  	type: types.USERTYPE,
  	userType
  }
}