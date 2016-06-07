/*
 *
 * LoginPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  LOGIN_ACTION, CHANGE_PASSWORD, CHANGE_USERNAME
} from './constants';

const initialState = fromJS({
  isAuthenticated: false,
  username: "",
  password: "",
  user_token: ''
});

function loginPageReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_ACTION:
      console.log(state.get('username'), state.get('password'));
      return state;
    case CHANGE_USERNAME:
      return state.set('username', action.name)
    case CHANGE_PASSWORD:
      return state.set('password', action.password)
    default:
      return state;
  }
}

export default loginPageReducer;
