import {take, put, call, cancelled, fork, cancel, select} from 'redux-saga/effects';
import { getIsUserAuthorized } from '../ducks/login';
// import Api from '...';
import { clearTokenApi } from '../api';
export function* authFlow() {
 while (true) { // 1
    // const isAuthorized = yield select(getIsUserAuthorized)
    // if(isAuthorized) {
   const {user, password} = yield take('LOGIN_REQUEST'); // 2

   const task = yield fork(authorize, user, password); // 4
   const action = yield take(['LOGOUT', 'LOGIN_ERROR']); // 5

   if (action.type === 'LOGOUT') yield cancel(task); // 6

   yield call(clearTokenApi, 'token'); // 7
 }
}

function* authorize(user, password) { // 3
 try {
   const token = yield call(Api.authorize, user, password);
   yield put({type: 'LOGIN_SUCCESS', token});
   yield call(Api.storeItem, {token});
   return token;
 } catch (error) { // 8
   yield put({type: 'LOGIN_ERROR', error});
 } finally {
   if (yield cancelled()) {
     // логика отмены
   }
 }
}
