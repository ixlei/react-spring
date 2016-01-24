'use strict';

export function constructCompNews() {
  return `/customer/compNews`;
}

export function constructFetchComNews() {
  return `/customer/getCompNews`;
}

export function constructNewsUrl(newsType) {
  return `/news/${newsType}`;
}

export function constructSocketUrl(args) {
  const {userType, socketType, socketTime} = args;
  return `/${userType}/socketManage/${socketType}/?socketTime=${socketTime}`;
}

export function constructSocketSearchUrl(args) {
  const {userType, socketType, socketTime, query} = args;
  return `/${userType}/manage/${socketType}?socketTime=${socketTime}&query=${query}`;
}