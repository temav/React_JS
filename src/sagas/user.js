import {
    fetchUserRequest,
    fetchUserSuccess,
    fetchUserFailure,
  } from '../actions/user';

import {
    loginError,
    logout,
  } from '../actions/auth';

import { takeLatest, call, put } from 'redux-saga/effects';
import { getTokenOwner, getUserInformation, clearTokenApi } from '../api';
  
  function* fetchUserSaga(action) {
    // try {
    //   let response;
    //   const { path, params } = action.payload;
    //   console.log('fetch user path', path)
    //   if(path === '/user/me') {
    //     console.log('its me')
    //     response = yield call(getTokenOwner, );
    //     }  else {
    //       console.log('its not me', params.login)
    //       console.log(call(getUserInformation, params.login));
    //     response = yield call(getUserInformation, params.login);
    //     console.log('response user kek', response)
    //     }
    //     // console.log('response user kek',response)
    //   yield put(fetchUserSuccess(response.data));
    // } catch (error) {
    //   yield call(clearTokenApi,);
    //   console.log(error.response);
    //   yield put(fetchUserFailure(error));
    // }
  
      let response;
      const { path, params } = action.payload;
      console.log('fetch user path', path)
      if(path === '/user/me') {
        try {
        console.log('its me')
        response = yield call(getTokenOwner, );
        yield put(fetchUserSuccess(response.data));
        } catch (error) {
          // yield call(clearTokenApi,);
          yield put(logout());
          console.log('error its me ', error.response);
          yield put(fetchUserFailure(error));
          yield put(loginError(error));
        }
      } 
      else {
        try {
          console.log('its not me', params.login)
          console.log(call(getUserInformation, params.login));
          response = yield call(getUserInformation, params.login);
          console.log('response user kek', response)
          yield put(fetchUserSuccess(response.data));
        } catch (error) {
            yield call(clearTokenApi,);
            console.log(error.response);
            yield put(fetchUserFailure(error));
          }
        }
  }
  
  export function* fetchUserWatch() {
    yield takeLatest(fetchUserRequest, fetchUserSaga);
  }