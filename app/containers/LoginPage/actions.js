/*
 *
 * LoginPage actions
 *
 */

import {
  LOGIN_ACTION,CHANGE_PASSWORD, CHANGE_USERNAME
} from './constants';

export function loginAction(username, password) {
  return {
    type: LOGIN_ACTION,
    payload: {
      username,
      password
    }
  };
}

export function changeUsername(name) {
  return {
    type: CHANGE_USERNAME,
    name,
  };
}

export function changePassword(password) {
  return {
    type: CHANGE_PASSWORD,
    password,
  };
}

