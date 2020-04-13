// fetchUserWatch
// import { takeLatest } from 'redux-saga/effects';

// export function* fetchUserFlow() {
    
// }

// export function* fetchUserWatch() {
//     yield takeLatest('FETCH_USER_REQUEST');
// }

import {
    fetchUserRequest,
    fetchUserSuccess,
    fetchUserFailure,
  } from '../actions/user';
  import { takeLatest, call, put } from 'redux-saga/effects';
  import { getUserInformation } from '../api';
  
  function* fetchUserSaga(action) {
    try {
      const response = yield call(getUserInformation, action.payload);
      yield put(fetchUserSuccess(response.data));
    } catch (error) {
      yield put(fetchUserFailure(error));
    }
  }
  
  export function* fetchUserWatch() {
    yield takeLatest(fetchUserRequest, fetchUserSaga);
  }