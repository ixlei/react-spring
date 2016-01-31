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

export function constructIfollerUrl(userType) {
  return `/${userType}/ifollow`;
}

export function constructInewsUrl(userType) {
  return `/${userType}/inews`;
}

export function constructModelUrl(modelType) {
  return `/company/corporateModel/${modelType}`;
}

export function constructReservationUrl(query) {
  return `/company/reservation?query=${query}`;
}

export function constructRegNextUrl(userType) {
  return `/customer/reg/${userType}next`;
}