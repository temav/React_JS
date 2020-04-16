import { take, put, call, select } from 'redux-saga/effects';
import { setTokenApi, clearTokenApi } from 'api';

import { getIsUserAuthorized } from 'ducks/auth';
import { loginRequest, loginSuccess, logout } from '../actions/auth';

import {
  getTokenFromLocalStorage,
  setTokenToLocalStorage,
  removeTokenFromLocalStorage
} from 'localStorage';

export function* authFlow() {
  while (true) {
    const isAuthorized = yield select(getIsUserAuthorized);
    const localStorageToken = yield call(getTokenFromLocalStorage);

    let token;

    if (!isAuthorized && localStorageToken) {
      token = localStorageToken;
      yield put(loginSuccess());
    } else {
      const action = yield take(loginRequest);
      console.log('auth saga ', action);
      token = action.payload;
      yield put(loginSuccess());
    }

    yield call(setTokenApi, token);
    yield call(setTokenToLocalStorage, token);

    yield take(logout);
    yield call(removeTokenFromLocalStorage);
    yield call(clearTokenApi);
  }
}
