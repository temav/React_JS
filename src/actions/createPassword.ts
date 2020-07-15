export enum ActionTokenTypes {
  SEND_TOKEN_REQUEST_TO_SERVER = "SEND_TOKEN_REQUEST_TO_SERVER",
  SEND_TOKEN_RESPONSE_SUCCESS = "SEND_TOKEN_RESPONSE_SUCCESS",
  SEND_TOKEN_RESPONSE_FAILURE = "SEND_TOKEN_RESPONSE_FAILURE",
}
export enum ActionPasswordTypes {
  SEND_PASSWORD_REQUEST_TO_SERVER = "SEND_PASSWORD_REQUEST_TO_SERVER",
  SEND_PASSWORD_RESPONSE_SUCCESS = "SEND_PASSWORD_RESPONSE_SUCCESS",
  SEND_PASSWORD_RESPONSE_FAILURE = "SEND_PASSWORD_RESPONSE_FAILURE",
}
// interface for token actions
export interface requestTokenAction {
  type: ActionTokenTypes.SEND_TOKEN_REQUEST_TO_SERVER;
  payload: string;
}

export interface successTokenAction {
  type: ActionTokenTypes.SEND_TOKEN_RESPONSE_SUCCESS;
  payload: string;
}

export interface failureTokenAction {
  type: ActionTokenTypes.SEND_TOKEN_RESPONSE_FAILURE;
  payload: string;
}
// interface for password actions
export interface requestPasswordAction {
  type: ActionPasswordTypes.SEND_PASSWORD_REQUEST_TO_SERVER;
  payload: string;
}

export interface successPasswordAction {
  type: ActionPasswordTypes.SEND_PASSWORD_RESPONSE_SUCCESS;
  payload: string;
}

export interface failurePasswordAction {
  type: ActionPasswordTypes.SEND_PASSWORD_RESPONSE_FAILURE;
  payload: string;
}

// actionCreators for token actions
export const ActionsToken = {
  sendRequestToServer: (token: string): requestTokenAction => ({
    type: ActionTokenTypes.SEND_TOKEN_REQUEST_TO_SERVER,
    payload: token,
  }),
  sendResponseSuccess: (response: string): successTokenAction => ({
    type: ActionTokenTypes.SEND_TOKEN_RESPONSE_SUCCESS,
    payload: response,
  }),
  sendResponseFailure: (response: string): failureTokenAction => ({
    type: ActionTokenTypes.SEND_TOKEN_RESPONSE_FAILURE,
    payload: response,
  }),
};
// actionCreators for password actions
export const ActionsPassword = {
  sendRequestToServer: (password: string): requestPasswordAction => ({
    type: ActionPasswordTypes.SEND_PASSWORD_REQUEST_TO_SERVER,
    payload: password,
  }),
  sendResponseSuccess: (response: string): successPasswordAction => ({
    type: ActionPasswordTypes.SEND_PASSWORD_RESPONSE_SUCCESS,
    payload: response,
  }),
  sendResponseFailure: (response: string): failurePasswordAction => ({
    type: ActionPasswordTypes.SEND_PASSWORD_RESPONSE_FAILURE,
    payload: response,
  }),
};
