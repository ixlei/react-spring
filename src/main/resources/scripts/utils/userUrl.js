'use strict';

export function constructChatUrl(userType) {
  return `/${userType}/chat`;
}

export function constructUserUrl(userType) {
  return `/${userType}/user`;
}