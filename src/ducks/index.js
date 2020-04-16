import { combineReducers } from 'redux';
import auth from './auth';
import user from './user';
import followers from './followers';
export default combineReducers({
  auth,
  user,
  followers
});
