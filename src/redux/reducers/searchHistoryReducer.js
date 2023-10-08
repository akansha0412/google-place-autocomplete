// searchHistoryReducer.js

import { ADD_TO_SEARCH_HISTORY } from '../actions/actionTypes';

const initialState = {
  history: [],
};

const searchHistoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_SEARCH_HISTORY:
      return {
        ...state,
        history: [...state.history, action.payload],
      };
    default:
      return state;
  }
};

export default searchHistoryReducer;
