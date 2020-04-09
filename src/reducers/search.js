import { searchRequest, searchSuccess, searchFailure } from '../actions/search';
import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';

const isLoading = handleActions({
    [searchRequest]: () => true,
    [searchSuccess]: () => false,
    [searchFailure]: () => false,
}, false);

const data = handleActions({
    [searchSuccess]: (state, action) => action.payload
}, []);

const error = handleActions({
    [searchFailure]: (state, action) => action.payload
}, null);

export default combineReducers({
    isLoading,
    data,
    error
});

export const getIsLoading = state => state.search.isLoading;
export const getData = state => state.search.data;
export const getError = state => state.search.error;

// export default (state = initState, action) => {
//     switch (action.type) {
//     case searchRequest.toString():
//         return {...state, isLoading: true};
//     case searchSuccess.toString():
//         return {...state, isLoading: false, data: action.payload}; 
//     case searchFailure.toString():
//         return {...state, isLoading: false, error: action.error};
//     default:
//         return state;
//     } 
// };
