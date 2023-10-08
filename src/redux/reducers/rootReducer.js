// rootReducer.js

import { combineReducers } from 'redux';
import autocompleteReducer from './autocompleteReducer';
import searchHistoryReducer from './searchHistoryReducer';
import mapReducer from './mapReducer'

const rootReducer = combineReducers({
  autocomplete: autocompleteReducer,
  searchHistory: searchHistoryReducer,
  map:mapReducer,
  // Add other reducers if you have them
});

export default rootReducer;
