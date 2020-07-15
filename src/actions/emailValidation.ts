export enum ActionTypes {
  SEND_REQUEST_TO_SERVER = 'SEND_REQUEST_TO_SERVER',
  SEND_RESPONSE_SUCCESS = 'SEND_RESPONSE_SUCCESS',
  SEND_RESPONSE_FAILURE = 'SEND_RESPONSE_FAILURE',
}

export interface requestAction {
  type: ActionTypes.SEND_REQUEST_TO_SERVER;
  payload: string;
  meta: string;
}

export interface successAction {
  type: ActionTypes.SEND_RESPONSE_SUCCESS;
  payload: string;
  meta: string;
}

export interface failureAction {
  type: ActionTypes.SEND_RESPONSE_FAILURE;
  payload: string;
  meta: string;
}

export const Actions = {
  sendRequestToServer: (email: string): requestAction => ({
    type: ActionTypes.SEND_REQUEST_TO_SERVER,
    payload: email,
    meta: '',
  }),
  sendResponseSuccess: (response: string): successAction => ({
    type: ActionTypes.SEND_RESPONSE_SUCCESS,
    payload: response,
    meta: '',
  }),
  sendResponseFailure: (response: string, error: string): failureAction => ({
    type: ActionTypes.SEND_RESPONSE_FAILURE,
    payload: response,
    meta: error,
  }),
};
