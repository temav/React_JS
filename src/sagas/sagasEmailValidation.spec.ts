import { expectSaga } from 'redux-saga-test-plan';
import { throwError } from 'redux-saga-test-plan/providers';
import { call, put } from 'redux-saga/effects';
import 'regenerator-runtime/runtime.js';

import { sendRequestSaga } from './emailValidation';
import { networkRequest, sendRequest } from '../../server/sendRequest';
import { Actions } from '../actions/emailValidation';
import rootReducer from '../reducers/emailValidation';

describe('Test Saga', () => {
  let action;

  describe('Simple saga', () => {
    it('Send success with true email', () => {
      const saga = sendRequestSaga(action);

      expect(saga.next().value).toEqual(
        call(networkRequest, sendRequest, action)
      );
      expect(saga.next({ response: 'email found' }).value).toEqual(
        put(Actions.sendResponseSuccess('email found'))
      );
    });
    it('Send failure with false email', () => {
      const saga = sendRequestSaga(action);

      expect(saga.next().value).toEqual(
        call(networkRequest, sendRequest, action)
      );
      expect(saga.next({ response: 'failure' }).value).toEqual(
        put(Actions.sendResponseFailure('failure', 'email'))
      );
    });
  });

  describe('Expect saga', () => {
    it('Send success with true email ', () => {
      const serverResponse = { response: 'email found' };

      return expectSaga(sendRequestSaga, action)
        .provide([[call(networkRequest, sendRequest, action), serverResponse]])
        .call(networkRequest, sendRequest, action)
        .put(Actions.sendResponseSuccess(serverResponse.response))
        .run(false);
    });
    it('Send failure with false email ', () => {
      const serverResponse = { response: 'failure' };

      let action;
      return expectSaga(sendRequestSaga, action)
        .provide([[call(networkRequest, sendRequest, action), serverResponse]])
        .call(networkRequest, sendRequest, action)
        .put(Actions.sendResponseFailure(serverResponse.response, 'email'))
        .run(false);
    });
  });

  it('Test throw error by server connection 404', () => {
    // const error = {
    // name: '404',
    // message: 'Error connection',
    // };
    const error = new Error('failure');
    return expectSaga(sendRequestSaga, action)
      .provide([[call(networkRequest, sendRequest, action), throwError(error)]])
      .call(networkRequest, sendRequest, action)
      .put(Actions.sendResponseFailure(error.message, 'connection'))
      .run(false);
  });

  it('Integration test saga with successful fetchRequest', () => {
    const serverResponse = { response: 'email found' };
    const stateChanged = {
      isFetching: false,
      isFetched: true,
      isError: null,
      responseFromServer: 'success',
    };
    return expectSaga(sendRequestSaga, action)
      .provide([[call(networkRequest, sendRequest, action), serverResponse]])
      .call(networkRequest, sendRequest, action)
      .put(Actions.sendResponseSuccess(serverResponse.response))
      .withReducer(rootReducer)
      .hasFinalState(stateChanged)
      .run(false);
  });
});
