import { createActions } from 'redux-actions';

const { userRequest, userSuccess, userFailure } = createActions('USER_REQUEST', 'USER_SUCCESS', 'USER_FAILURE');

export { userRequest, userSuccess, userFailure };