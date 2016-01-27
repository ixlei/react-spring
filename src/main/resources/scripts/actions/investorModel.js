'use strict';

import * as types from '../constants/customerActionType';
import fetch from 'isomorphic-fetch';
import {constructInvestorModelUrl} from '../utils/InvestorUrl';
import {checkStatus} from '../utils/fetchStatus';
import {constructModelUrl} from '../utils/constructUrl';

export function getInvestorModel(modelType) {
  return (dispatch,getState) => {
  	dispatch(requestInvestorModel(modelType));
    const {user:{userType}} = getState();

    const url = userType === 'investor' 
     ? constructInvestorModelUrl(modelType)
     : constructModelUrl(modelType);

  	return fetch(url, {
      credentials: 'include'
      })
  	  .then(response => checkStatus(response))
      .then(res => res.json())
  	  .then(json => dispatch(receive(json)))
  	  .catch(error => dispatch(failure(error)));
  }
}


function requestInvestorModel(modelType) {
  return {
  	type: types.REQUEST_INVESTORMODEL,
  	modelType
  }
}

function receive(entity) {
  return {
  	type: types.RECEIVE_INVESTORMODEL,
  	entity
  }
}

function failure(error) {
  return {
  	type: types.FAILURE_INVESTORMODEL,
  	error
  }
}