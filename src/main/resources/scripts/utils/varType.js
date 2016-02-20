'use strict';

export function isArray(value) {
  return Array.isArray 
    ? Array.isArray(value) 
    : Object.prototype.toString.call(value) === '[object Array]';
}

export function isString(value) {
  return typeof value === 'string';
}

export function isNumber(value) {
  return typeof value === 'number';
}

export function isFunction(value) {
  return typeof value === 'function';
}

export function isBoolean(value) {
  return typeof value === 'boolean';
}

export function isObject(value) {
  return value !== null && typeof value === 'object';
}

export function isDate(value) {
  return Object.prototype.toString.call(value) === '[object Date]';
}

export function isRegExp(value) {
  return Object.prototype.toString.call(value) === '[object RegExp]';
}