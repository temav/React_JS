import { createActions } from 'redux-actions';

const { loginRequest, loginSuccess, loginError, logout } = createActions(
  'LOGIN_REQUEST',
  'LOGIN_SUCCESS',
  'LOGIN_ERROR',
  'LOGOUT'
);

export { loginRequest, loginSuccess, loginError, logout };
