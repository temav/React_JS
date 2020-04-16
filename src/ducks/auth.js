import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import {
  loginRequest,
  loginSuccess,
  loginError,
  logout
} from '../actions/auth';

const isUserAuthorized = handleActions(
  {
    [loginRequest]: () => false,
    [loginSuccess]: () => true,
    [loginError]: () => false,
    [logout]: () => false
  },
  false
);

export default combineReducers({ isUserAuthorized });

export const getIsUserAuthorized = state => state.auth.isUserAuthorized;
