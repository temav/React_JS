import { emailValidationInitState } from './emailValidationInitState';
import { ActionTypes } from '../actions/emailValidation';

const initialState: emailValidationInitState = {
  isFetching: false,
  isFetched: false,
  isError: null,
  responseFromServer: 'none',
};

export default function emailValidationReducer(
  state: emailValidationInitState = initialState,
  action: { type: string; payload: string; meta: string }
) {
  switch (action.type) {
    case ActionTypes.SEND_REQUEST_TO_SERVER:
      return {
        ...state,
        isFetching: true,
        isFetched: false,
      };
    case ActionTypes.SEND_RESPONSE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isFetched: true,
        isError: null,
        responseFromServer: 'success',
      };
    case ActionTypes.SEND_RESPONSE_FAILURE:
      return {
        ...state,
        isFetching: false,
        isFetched: true,
        responseFromServer: action.payload,
        isError: action.meta,
      };
    default:
      return state;
  }
}

const getIsFetching = (state) => state.emailValidationReducer.isFetching;
const getIsFetched = (state) => state.emailValidationReducer.isFetched;
const getIsError = (state) => state.emailValidationReducer.isError;
const getResponseFromServer = (state) =>
  state.emailValidationReducer.responseFromServer;
export { getIsFetching, getIsFetched, getIsError, getResponseFromServer };
