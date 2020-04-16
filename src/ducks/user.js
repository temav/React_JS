import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

import {
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserFailure
} from '../actions/user';
import { logout } from '../actions/auth';

const isLoading = handleActions(
  {
    [fetchUserRequest]: () => true,
    [fetchUserSuccess]: () => false,
    [fetchUserFailure]: () => false
  },
  false
);

const data = handleActions(
  {
    [fetchUserSuccess]: (state, action) => action.payload,
    [logout]: () => []
  },
  []
);

const error = handleActions(
  {
    [fetchUserFailure]: (state, action) => action.payload,
    [fetchUserSuccess]: () => false,
    [logout]: () => false
  },
  null
);

export default combineReducers({ isLoading, data, error });

export const getUserIsLoading = state => state.user.isLoading;
export const getUserData = state => state.user.data;
export const getUserError = state => state.user.error;
