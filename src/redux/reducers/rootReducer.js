// rootReducer.js

import { combineReducers } from 'redux';
import autocompleteReducer from './autocompleteReducer';
import mapReducer from './mapReducer'

const rootReducer = combineReducers({
  autocomplete: autocompleteReducer,
  map:mapReducer,
  // Add other reducers if you have them
});

export default rootReducer;
