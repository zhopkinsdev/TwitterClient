import SearchUserActionTypes from './search_user.types';

import {
  toggleCartHidden,
  searchUser,
  filterTweets
} from './search_user.actions';

describe('toggleCartHidden action', () => {
  it('should create toggleCartHidden action', () => {
    const mockItem = {
      boolValue: false
    };

    const action = toggleCartHidden(mockItem);

    expect(action.type).toEqual(SearchUserActionTypes.TOGGLE_FILTER);
    expect(action.payload).toEqual(mockItem);
  });
});

describe('searchUser action', () => {
  it('should create searchUser action', () => {
    const mockItem = {
      id: 1
    };

    const action = searchUser(mockItem);

    expect(action.type).toEqual(SearchUserActionTypes.SEARCH_USER);
    expect(action.payload).toEqual(mockItem);
  });
});

describe('filterTweets action', () => {
  it('should create filterTweets action', () => {
    const mockItem = {
      id: 1
    };

    const action = filterTweets(mockItem);

    expect(action.type).toEqual(SearchUserActionTypes.FILTER_TWEETS);
    expect(action.payload).toEqual(mockItem);
  });
});