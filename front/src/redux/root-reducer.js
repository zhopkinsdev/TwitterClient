import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import searchUserReducer from './search_user/search_user.reducer';

export default combineReducers({
  user: userReducer,
  searchUser: searchUserReducer
});