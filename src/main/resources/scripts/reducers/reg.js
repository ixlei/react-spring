'use strict';

import * as types from '../constants/customerActionType';

const initState = {
  regStep: 0,
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
    id: 'companyName',
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
    case types.POST_CHECKVALID:
      return Object.assign({}, state, {
        postCheck: action.postCheck,
        isFetching: true
      })
    case types.RECEIVE_CHECKVALID:
      let {entities: {check, checkKind}} = action;
      newItemState = itemState.map(item => {
        let {id} = item;
        if(id === checkKind) {
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
      const {error: {checkKind : checkType}} = action;
      newItemState = itemState.map(item => {
        let {id} = item;
        if(id === checkType) {
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
      const {entity: {invalid, checkKind: validType}} = action;
      newItemState = itemState.map(item => {
        let {id} = item;
        if(id === validType) {
          return Object.assign(item, {
            valid: (invalid ? 'invalid' : 'valid')
          })
        }
        return item;
      })
      return Object.assign({}, state, {
        itemState: newItemState
      })
    case types.ITEMTIPS:
      const {tips: {text, checkKind : tipsType}} = action;
      newItemState = itemState.map(item => {
        let {id} = item;
        if(id === tipsType) {
          return Object.assign(item ,{
            tips: text
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
    case types.INITREGITEM:
      let initItem = itemState.map(item => (
        Object.assign({}, item, {
          valid: '',
          tips: ''
        })
      ))
      return Object.assign({}, state, {itemState: initItem});

    case types.INITITEMVALID:
      const {checkKind: initValid} = action;
      newItemState = itemState.map(item => {
        let {id} = item;
        if(id === initValid) {
          return Object.assign(item ,{
            valid: ''
          })
        }
        return item;
      })
      return Object.assign({}, state, {
        itemState: newItemState
      })
    default:
      return state;
  }
}