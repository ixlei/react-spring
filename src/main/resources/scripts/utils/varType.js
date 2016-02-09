'use strict';

export function isArray(array) {
  return Array.isArray 
    ? Array.isArray(array) 
    : Object.prototype.toString.call(array) === '[object Array]';
}