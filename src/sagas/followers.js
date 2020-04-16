import {
  fetchFollowersRequest,
  fetchFollowersSuccess,
  fetchFollowersFailure
} from 'actions/followers';
import { takeLatest, call, put } from 'redux-saga/effects';
import { getUserFollowers } from 'api';

function* fetchFollowersSaga(action) {
  try {
    console.log('saga', action.payload);
    const response = yield call(getUserFollowers, action.payload);
    yield put(fetchFollowersSuccess(response.data));
  } catch (error) {
    console.log('saga followers ', error);
    yield put(fetchFollowersFailure(error));
  }
}

export function* fetchFollowersWatch() {
  yield takeLatest(fetchFollowersRequest, fetchFollowersSaga);
}
