import { showRequest, showSuccess, showFailure } from '../actions/show';
import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';

// const initState = {
//     isLoading: false,
//     data: [],
//     error: null,
// };

const isLoading = handleActions({
    [showRequest]: () => true,
    [showSuccess]: () => false,
    [showFailure]: () => false,
}, false);

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

export const getIsLoading = state => state.isLoading;
export const getData = state => state.data;
export const getError = state => state.error;
