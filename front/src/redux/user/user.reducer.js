import CurrentUserActionTypes from './user.types';

const INITIAL_STATE = {
  homeTweets: []
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CurrentUserActionTypes.SET_CURRENT_USER_TWEETS:
      return {
        ...state,
        homeTweets: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;