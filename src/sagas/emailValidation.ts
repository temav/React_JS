import { call, put, takeLatest } from 'redux-saga/effects';
import { sendRequest, networkRequest } from '../../server/sendRequest';
import { ActionTypes, Actions } from '../actions/emailValidation';

export function* sendRequestSaga(action) {
  try {
    const serverResponse = yield call(networkRequest, sendRequest, action);
    const { response } = serverResponse;
    if (response === 'email found') {
      yield put(Actions.sendResponseSuccess(response));
    } else {
      yield put(Actions.sendResponseFailure('failure', 'email'));
    }
  } catch (error) {
    yield put(Actions.sendResponseFailure('failure', 'connection'));
  }
}

function* sendRequestListener() {
  yield takeLatest(ActionTypes.SEND_REQUEST_TO_SERVER, sendRequestSaga);
}
export default sendRequestListener;
