import { call, put, takeLatest } from 'redux-saga/effects';
import {
  sendTokenRequest,
  sendPasswordRequest,
  networkRequest,
} from '../../server/sendRequest';
import {
  ActionTokenTypes,
  ActionsToken,
  ActionPasswordTypes,
  ActionsPassword,
} from '../actions/createPassword';

export function* sendTokenRequestSaga(action) {
  try {
    const serverResponse = yield call(networkRequest, sendTokenRequest, action);
    const { response } = serverResponse;
    if (response !== 'token not found') {
      yield put(ActionsToken.sendResponseSuccess(response));
    } else {
      yield put(ActionsToken.sendResponseFailure('failure_token'));
    }
  } catch (error) {
    yield put(ActionsToken.sendResponseFailure(JSON.stringify(error)));
  }
}

export function* sendTokenRequestListener() {
  yield takeLatest(
    ActionTokenTypes.SEND_TOKEN_REQUEST_TO_SERVER,
    sendTokenRequestSaga
  );
}

export function* sendPasswordRequestSaga(action) {
  try {
    // console.log('SAGA GOT ACTION', action);
    const serverResponse = yield call(
      networkRequest,
      sendPasswordRequest,
      action
    );
    const { response } = serverResponse;
    if (response !== 'token is invalid') {
      yield put(ActionsPassword.sendResponseSuccess('success'));
    } else {
      yield put(ActionsPassword.sendResponseFailure('failure_password'));
    }
  } catch (error) {
    yield put(ActionsPassword.sendResponseFailure(JSON.stringify(error)));
  }
}

export function* sendPasswordRequestListener() {
  yield takeLatest(
    ActionPasswordTypes.SEND_PASSWORD_REQUEST_TO_SERVER,
    sendPasswordRequestSaga
  );
}
// export sendPasswordRequestListener;
