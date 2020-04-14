import { fork } from 'redux-saga/effects';
import { fetchUserWatch } from './user';
import { fetchFollowersWatch } from './followers';
import { authFlow } from './auth';

export default function*() {
  yield fork(authFlow);
  yield fork(fetchUserWatch);
  yield fork(fetchFollowersWatch);
}
