// import {take, put, call, cancelled, fork, cancel, select} from 'redux-saga/effects';
// import { getIsUserAuthorized } from '../ducks/auth';
// // import Api from '...';
// import { clearTokenApi } from '../api';

import { take, put, call, select } from 'redux-saga/effects';
import { setTokenApi, clearTokenApi } from 'api';
import { getIsUserAuthorized } from 'ducks/auth';
import { loginRequest, loginSuccess, logout } from '../actions/auth';
import {
  getTokenFromLocalStorage,
  setTokenToLocalStorage,
  removeTokenFromLocalStorage
} from 'localStorage'

export function* authFlow() {
  while (true) {
    const isAuthorized = yield select(getIsUserAuthorized) /* boolean */
    const localStorageToken = yield call(getTokenFromLocalStorage)

    let token;

    if (!isAuthorized && localStorageToken) {
      token = localStorageToken
      console.log(...localStorageToken);
      yield put(loginSuccess())
    } else {
      const action = yield take(loginRequest)
      token = action.payload
    }

    yield call(setTokenApi, token)
    yield call(setTokenToLocalStorage, token)
    console.log(token);
    yield take(logout)

    yield call(removeTokenFromLocalStorage)
    yield call(clearTokenApi)
  }
}
