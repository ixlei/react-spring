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