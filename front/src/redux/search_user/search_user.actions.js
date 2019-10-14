import SearchUserActionTypes from './search_user.types';

export const toggleCartHidden = boolValue => ({
  type: SearchUserActionTypes.TOGGLE_FILTER,
  payload: boolValue
});

export const searchUser = user => ({
  type: SearchUserActionTypes.SEARCH_USER,
  payload: user
});

export const filterTweets = filterWord => ({
  type: SearchUserActionTypes.FILTER_TWEETS,
  payload: filterWord
});