
import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { fetchFollowersRequest, fetchFollowersSuccess, fetchFollowersFailure } from '../actions/followers';

const isLoading = handleActions({
    [fetchFollowersRequest]: () => true,
    [fetchFollowersSuccess]: () => false,
    [fetchFollowersFailure]: () => false
}, false);

const data = handleActions({
    [fetchFollowersSuccess]: (state, action) => action.payload,
}, []);

const error = handleActions({
    [fetchFollowersFailure]: (state, action) => action.error,
}, null);

export default combineReducers( { isLoading, data, error } );

export const getFollowersIsLoading = state => state.followers.isLoading;
export const getFollowersData = state => state.followers.data;
export const getFollowersError = state => state.followers.error;