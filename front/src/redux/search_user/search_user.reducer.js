import SearchUserActionTypes from './search_user.types';

const INITIAL_STATE = {
  hidden: true,
  searchUser: '',
  filterWord: ''
};

const searchUserReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SearchUserActionTypes.TOGGLE_FILTER:
      return {
        ...state,
      //  hidden: !state.hidden
      hidden: action.payload
      };
    case SearchUserActionTypes.SEARCH_USER:
      return {
        ...state,
        searchUser: action.payload
      };
    case SearchUserActionTypes.FILTER_TWEETS:
      return {
        ...state,
        filterWord: action.payload
      };
    default:
      return state;
  }
};

export default searchUserReducer;