import {
    fetchUserRequest,
    fetchUserSuccess,
    fetchUserFailure,
  } from '../actions/user';
  import {
    loginError,
  } from '../actions/auth';
  import { takeLatest, call, put } from 'redux-saga/effects';
  import { getTokenOwner, getUserInformation } from '../api';
  
  function* fetchUserSaga(action) {
    try {
      let response;
      const { path, params } = action.payload;
      console.log('fetchuser', path)
      if(path === '/user/me') {
        console.log('its me')
        response = yield call(getTokenOwner, path);
        }  else {
          console.log('its not me')
        response = yield call(getUserInformation, params.login);
        }
        // yield put(login(error));
      yield put(fetchUserSuccess(response.data));
    } catch (error) {
      yield put(fetchUserFailure(error));
      yield put(loginError(error));
    }
  }
  
  export function* fetchUserWatch() {
    yield takeLatest(fetchUserRequest, fetchUserSaga);
  }