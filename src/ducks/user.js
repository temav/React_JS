import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { fetchUserRequest, fetchUserSuccess, fetchUserFailure } from '../actions/user';

const isLoading = handleActions({
    [fetchUserRequest]: () => true,
    [fetchUserSuccess]: () => false,
    [fetchUserFailure]: () => false
}, false);

const data = handleActions({
    [fetchUserSuccess]: (state, action) => action.payload,
}, []);

const error = handleActions({
    [fetchUserFailure]: (state, action) => action.error,
}, null);

export default combineReducers( { isLoading, data, error } );

export const getUserIsLoading = state => state.user.isLoading;
export const getUserData = state => state.user.data;
export const getUserError = state => state.user.error;