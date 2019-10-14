import SearchUserActionTypes from './search_user.types';
import search_userReducer from './search_user.reducer';

const initialState = {
  hidden: true,
  searchUser: '',
  filterWord: ''
};

describe('search_userReducer', () => {
  it('should return initial state', () => {
  expect(search_userReducer(undefined, {})).toEqual(initialState);
    });

  it('should set hidden to payload', () => {
    const mockTweets = { boolValue: true };
    expect(
      search_userReducer(initialState, {
            type: SearchUserActionTypes.TOGGLE_FILTER,
            payload: mockTweets
          }).hidden
        ).toEqual(mockTweets);
      });

  it('should set searchUser to payload', () => {
    const mockTweets = { id: 1, userName: 'Test' };;
    expect(
      search_userReducer(initialState, {
            type: SearchUserActionTypes.SEARCH_USER,
            payload: mockTweets
          }).searchUser
        ).toEqual(mockTweets);
      });
  
    it('should set filterWord to payload', () => {
      const mockTweets = { filterWord: 'test' };
      expect(
        search_userReducer(initialState, {
              type: SearchUserActionTypes.FILTER_TWEETS,
              payload: mockTweets
            }).filterWord
          ).toEqual(mockTweets);
        });


})