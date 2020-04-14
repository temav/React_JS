import {
    fetchUserRequest,
    fetchUserSuccess,
    fetchUserFailure,
  } from '../actions/user';
  import { takeLatest, call, put } from 'redux-saga/effects';
  import { getTokenOwner } from '../api';
  
  function* fetchUserSaga(action) {
    try {
      const response = yield call(getTokenOwner, action.payload);
      yield put(fetchUserSuccess(response.data));
    } catch (error) {
      yield put(fetchUserFailure(error));
    }
  }
  
  export function* fetchUserWatch() {
    yield takeLatest(fetchUserRequest, fetchUserSaga);
  }