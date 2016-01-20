'use strict';

import * as types from '../constants/customerActionType';

const initState = {
  userType: 'investor',
  fetchId: '',
  validate: false,
  isFetching: false,
  friends: [],
  session: '',
  username: ''
}

export function user(state = initState, action) {
  switch(action.type) {
  	case types.USERTYPE:
      return Object.assign({}, state, {
      	userType: action.userType,
        fetchId: 'userType'
      });
    case types.REQUESTUSER:
      return Object.assign({}, state, {
      	isFetching: true,
        fetchId: 'user'
      })
    case types.USERINFO:
      const {entity:{res}, entity} = action;
      return res === 'success'
      ? Object.assign({}, state, entity.data, {
      	validate: true,
      	isFetching: false
      }) : Object.assign({}, state, {
      	validate: false,
      	isFetching: false
      })
    case types.REQUESTFRIENDS:
      return Object.assign({}, state, {
        isFetching: true,
        fetchId: 'chat'
      })
    case types.RECEIVEFRIENDS:
      const {entity: {res: result, username, friends, session}} = action;
      return result === 'success' 
      ? Object.assign({}, state, {
        username,
        friends,
        session,
        isFetching: false,
        validate: true
       })
      : Object.assign({}, state, {
         isFetching: false,
         validate: false
       })
    case types.FAILUREFRIENDS:
      return Object.assign({}, state, {
        validate: false,
        isFetching: false
      })
    default:
      return state;
  }
}