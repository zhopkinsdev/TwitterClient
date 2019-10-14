import CurrentUserActionTypes from './user.types';

export const setCurrentUserTweets = homeTweets => ({
  type: CurrentUserActionTypes.SET_CURRENT_USER_TWEETS,
  payload: homeTweets
});