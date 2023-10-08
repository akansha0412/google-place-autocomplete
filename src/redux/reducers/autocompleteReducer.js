// autocompleteReducer.js

import { FETCH_AUTOCOMPLETE_SUCCESS} from '../actions/actionTypes';

const initialState = {
  results: [],
};

const autocompleteReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_AUTOCOMPLETE_SUCCESS:
      return {
        ...state,
        results: action.payload,
      };
    default:
      return state;
  }
};

export default autocompleteReducer;
