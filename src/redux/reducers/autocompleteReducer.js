// autocompleteReducer.js

import { ADD_TO_SEARCH_HISTORY, FETCH_AUTOCOMPLETE_SUCCESS} from '../actions/actionTypes';

const initialState = {
  results: [],
  history: [],
};

const autocompleteReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_AUTOCOMPLETE_SUCCESS:
      return {
        ...state,
        results: action.payload,
      };
      case ADD_TO_SEARCH_HISTORY:
        return {
          ...state,
          history: [...state.history, action.payload],
        };
    default:
      return state;
  }
};

export default autocompleteReducer;
