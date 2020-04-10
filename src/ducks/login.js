import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux'
import { loginRequest, loginSuccess, loginError, logout } from '../actions/login';

const isUserAuthorized = handleActions({
    [loginRequest]: () => false,
    [loginSuccess]: () => true,
    [loginError]: () => false,
}, null);

export default combineReducers({ isUserAuthorized });

export const getIsUserAuthorized = state => state.login.isUserAuthorized;
  