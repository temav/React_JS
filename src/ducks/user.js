import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { userRequest, userSuccess, userFailure } from '../actions/user';

const isLoading = handleActions({
    [userRequest]: () => true,
    [userSuccess]: () => false,
    [userFailure]: () => false
}, false);

const user_data = handleActions({
    // [userRequest]: (state, action) => action,
    [userSuccess]: (state, action) => action.payload,
    // [userFailure]: (state, action) => action.error
}, []);

const error = handleActions({
    [userFailure]: (state, action) => action.error,
}, null);

export default combineReducers( { isLoading, user_data, error } );

export const getIsLoading = state => state.user.isLoading;
export const getData = state => state.user.data;
export const getError = state => state.user.error;