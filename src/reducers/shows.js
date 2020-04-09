import { showRequest, showSuccess, showFailure } from '../actions/show';
import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';

const isLoading = handleActions({
    [showRequest]: () => true,
    [showSuccess]: () => false,
    [showFailure]: () => false,
}, true);

const data = handleActions({
    [showSuccess]: (state, action) => action.payload
}, []);

const error = handleActions({
    [showFailure]: (state, action) => action.payload
}, null);

export default combineReducers({
    isLoading,
    data,
    error
});

export const getIsLoading = state => state.shows.isLoading;
export const getData = state => state.shows.data;
export const getError = state => state.shows.error;
