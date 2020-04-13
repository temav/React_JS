import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { fetchUserRequest, fetchUserSuccess, fetchUserFailure } from '../actions/user';

const isLoading = handleActions({
    [fetchUserRequest]: () => true,
    [fetchUserSuccess]: () => false,
    [fetchUserFailure]: () => false
}, false);

const user_data = handleActions({
    [fetchUserSuccess]: (state, action) => action.payload,
}, []);

const error = handleActions({
    [fetchUserFailure]: (state, action) => action.error,
}, null);

export default combineReducers( { isLoading, user_data, error } );

export const getIsLoading = state => state.user.isLoading;
export const getData = state => state.user.data;
export const getError = state => state.user.error;