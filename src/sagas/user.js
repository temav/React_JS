import {
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserFailure
} from '../actions/user';

import { loginError, logout } from '../actions/auth';

import { takeLatest, call, put } from 'redux-saga/effects';
import { getTokenOwner, getUserInformation } from '../api';

function* fetchUserSaga(action) {
  let response;
  const { path, params } = action.payload;
  console.log('fetch user path', path);
  if (path === '/user/me') {
    try {
      console.log('its me');
      response = yield call(getTokenOwner);
      yield put(fetchUserSuccess(response.data));
    } catch (error) {
      alert('Login is wrong, would you try login again?');
      yield put(logout());
      console.log('error its me ', error.response);
      yield put(fetchUserFailure(error));
      yield put(loginError(error));
    }
  } else {
    try {
      console.log('its not me', params.login);
      response = yield call(getUserInformation, params.login);
      yield put(fetchUserSuccess(response.data));
    } catch (error) {
      console.log(error.response);
      yield put(fetchUserFailure(error));
    }
  }
}

export function* fetchUserWatch() {
  yield takeLatest(fetchUserRequest, fetchUserSaga);
}
