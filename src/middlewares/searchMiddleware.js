import { search } from "../api";
import { searchRequest, searchSuccess, searchFailure } from "../actions/search";

export const searchMiddleware = store => next => action => {
    const result = next(action);
    if (action.type === searchRequest.toString())
        search(action.payload)
        .then( res => {
            store.dispatch(searchSuccess(res));
        })
        .catch(error => {
            store.dispatch(searchFailure('лох'));
        })
    return result;
}