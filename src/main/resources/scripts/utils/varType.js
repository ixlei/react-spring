'use strict';

export function isArray(value) {
  return Array.isArray 
    ? Array.isArray(value) 
    : Object.prototype.toString.call(value) === '[object Array]';
}

export function isUndefined(value) {
  return typeof value === 'undefined';
}

export function isNull(value) {
  return typeof value === null;
}

export function isSymbol(value) {
  return typeof value === 'symbol';
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