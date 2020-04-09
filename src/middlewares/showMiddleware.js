import { show } from "../api";
import { showRequest, showSuccess, showFailure } from "../actions/show";

export const showMiddleware = store => next => action => {
    const result = next(action);
    if (action.type === showRequest.toString())
        show(action.payload)
        .then( res => {
            store.dispatch(showSuccess(res));
        })
        .catch(error => {
            store.dispatch(showFailure('лох'));
        })
    return result;
}