'use strict';

import fetch from 'isomorphic-fetch';
import * as types from '../constants/customerActionType';
import {constructNewsUrl} from '../utils/constructUrl';
import {checkStatus} from '../utils/fetchStatus';

export function fetchNews(newsType) {
  return (dispatch) => {
    dispatch(reqNews(newsType));
    return fetch(constructNewsUrl(newsType), {
      credentials: 'include'
    })
    .then(response => checkStatus(response))
    .then(res => res.json())
    .then(json => dispatch(receiveNews(json)))
    .catch(err => dispatch(failureNews(err)))
  }
}

function reqNews(newsType) {
  return {
  	type: types.FETCHNEWS,
    newsType
  }
}

function receiveNews(entity) {
  return {
  	type: types.RECEIVENEWS,
  	entity
  }
}

function failureNews(error) {
  return {
  	type: types.FAILURENEWS,
  	error
  }
}