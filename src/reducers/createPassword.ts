import { createPasswordInitState } from "./createPasswordInitState";
import {
  ActionTokenTypes,
  ActionPasswordTypes,
  ActionsToken,
} from "../actions/createPassword";

const initialState: createPasswordInitState = {
  isFetching: false,
  isFetched: false,
  responseFromServer: null,
};
//reducer for token request
export function checkTokenReducer(
  state: createPasswordInitState = initialState,
  action: { type: string; payload: string }
) {
  switch (action.type) {
    case ActionTokenTypes.SEND_TOKEN_REQUEST_TO_SERVER:
      return {
        ...state,
        isFetching: true,
        isFetched: false,
      };
    case ActionTokenTypes.SEND_TOKEN_RESPONSE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isFetched: true,
        responseFromServer: action.payload,
      };
    case ActionTokenTypes.SEND_TOKEN_RESPONSE_FAILURE:
      return {
        ...state,
        isFetching: false,
        isFetched: true,
        responseFromServer: "failure",
      };
    default:
      return state;
  }
}
//reducer for password request
export function createPasswordReducer(
  state: createPasswordInitState = initialState,
  action: { type: string; payload: string }
) {
  switch (action.type) {
    case ActionPasswordTypes.SEND_PASSWORD_REQUEST_TO_SERVER:
      return {
        ...state,
        isFetching: true,
        isFetched: false,
      };
    case ActionPasswordTypes.SEND_PASSWORD_RESPONSE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isFetched: true,
        responseFromServer: action.payload,
      };
    case ActionPasswordTypes.SEND_PASSWORD_RESPONSE_FAILURE:
    case ActionTokenTypes.SEND_TOKEN_RESPONSE_FAILURE:
      return {
        ...state,
        isFetching: false,
        isFetched: true,
        responseFromServer: "failure",
      };
    default:
      return state;
  }
}

//getState functions for token
const getTokenIsFetching = (state) => state.checkTokenReducer.isFetching;
const getTokenIsFetched = (state) => state.checkTokenReducer.isFetched;
const getTokenResponseFromServer = (state) =>
  state.checkTokenReducer.responseFromServer;
//getState functions for password
const getPasswordIsFetching = (state) => state.createPasswordReducer.isFetching;
const getPasswordIsFetched = (state) => state.createPasswordReducer.isFetched;
const getPasswordResponseFromServer = (state) =>
  state.createPasswordReducer.responseFromServer;

export { getTokenIsFetching, getTokenIsFetched, getTokenResponseFromServer };
export {
  getPasswordIsFetching,
  getPasswordIsFetched,
  getPasswordResponseFromServer,
};
