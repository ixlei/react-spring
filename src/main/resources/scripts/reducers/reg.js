'use strict';

import * as types from '../constants/customerActionType';

const initState = {
  regStep: 0,
  userType: 'investor',
  isFetching: false,
  IsFocus: '',
  postCheck: '',
  iagree: true,
  itemState: [{
    id: 'username',
    valid: '',
    tips: ''
  }, {
    id: 'password',
    valid: '',
    tips:''
  }, {
    id: 'repassword',
    valid: '',
    tips: ''
  },  {
    id: 'name',
    valid: '',
    tips: ''
  }, {
    id: 'IdCard',
    valid: '',
    tips:''
  }, {
    id: 'companyname',
    valid: '',
    tips: ''
  }, {
    id: 'code',
    valid: '',
    tips: ''
  }]
 
}

export function reg(state = initState, action) {
  let newItemState, {itemState, postCheck, IsFocus} = state;
  switch(action.type) {
    case types.REGSTEP:
      return Object.assign({}, state, {
      	regStep: action.regStep
      })
    case types.USERTYPE:
      return Object.assign({}, state, {
      	userType: action.userType
      })
    case types.POST_CHECKVALID:
      return Object.assign({}, state, {
        postCheck: action.postCheck,
        isFetching: true
      })
    case types.RECEIVE_CHECKVALID:
      let {entities: {check}} = action;
      newItemState = itemState.map(function(item) {
        let {id} = item;
        if(id === postCheck) {
          if(check === 'valid') {
            return Object.assign(item, {
              valid: 'valid'
            })
          }
          return Object.assign(item, {
            valid: 'invalid'
          })
        }
        return item;
      })
      return Object.assign({}, state, {
        isFetching: false,
        itemState: newItemState
      })
    case types.failureCheckInvalid:
      newItemState = itemState.map(function(item) {
        let {id} = item;
        if(id === postCheck) {
          return Object.assign(item, {
            valid: 'invalid',
            tips: '网络错误,稍后再试'
          })
        }
        return item;
      })
      return Object.assign({}, state, {
        isFetching: false,
        itemState: newItemState
      })
    case types.ISFOCUS:
      return Object.assign({}, state, {
        IsFocus: action.IsFocus
      })
    case types.ITEM_INVALID:
      newItemState = itemState.map(function(item) {
        let {id} = item;
        if(id === IsFocus) {
          return Object.assign(item, {
            valid: (action.invalid ? 'invalid' : 'valid')
          })
        }
        return item;
      })
      return Object.assign({}, state, {
        itemState: newItemState
      })
    case types.ITEMTIPS:
      newItemState = itemState.map(function(item) {
        let {id} = item;
        if(id === IsFocus) {
          return Object.assign(item ,{
            tips: action.tips
          })
        }
        return item;
      })
      return Object.assign({}, state, {
        itemState: newItemState
      })
    case types.AGREE:
      const {iagree} = state;
      return Object.assign({}, state, {
        iagree: (!iagree)
      })
    default:
      return state;
  }
}