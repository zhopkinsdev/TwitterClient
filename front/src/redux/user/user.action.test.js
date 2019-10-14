import CurrentUserActionTypes from './user.types';

import {
  setCurrentUserTweets
} from './user.actions';

describe('setCurrentUserTweets action', () => {
  it('should create setCurrentUserTweets action', () => {
    const mockItem = {
      id: 1
    };

    const action = setCurrentUserTweets(mockItem);

    expect(action.type).toEqual(CurrentUserActionTypes.SET_CURRENT_USER_TWEETS);
    expect(action.payload).toEqual(mockItem);
  });
});
