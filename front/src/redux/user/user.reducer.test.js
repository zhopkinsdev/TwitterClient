import CurrentUserActionTypes from './user.types';
import userReducer from './user.reducer';

const initialState = {
  homeTweets: []
};

describe('userReducer', () => {
  it('should return initial state', () => {
  expect(userReducer(undefined, {})).toEqual(initialState);
    });

  it('should set homeTweets to payload', () => {
    const mockTweets = { id: 1, userName: 'Test' };
    expect(
    userReducer(initialState, {
            type: CurrentUserActionTypes.SET_CURRENT_USER_TWEETS,
            payload: mockTweets
          }).homeTweets
        ).toEqual(mockTweets);
      });


})