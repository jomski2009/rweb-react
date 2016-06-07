import { take, call, put, select } from 'redux-saga/effects';

import { fromJS } from 'immutable';
import {
  LOGIN_ACTION, CHANGE_PASSWORD, CHANGE_USERNAME
} from './constants';

import { selectUsername, selectPassword } from './selectors'

// All sagas to be loaded
export default [
  loginSaga,
];

// Individual exports for testing

export function* loginSaga() {
  while (true) {
    const action = yield take(LOGIN_ACTION);
    const username = yield select(selectUsername());
    const password = yield select(selectPassword());

    console.log(username, password)
    //yield fork(getActivities, url);
  }
}