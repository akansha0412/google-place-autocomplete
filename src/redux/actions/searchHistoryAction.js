// searchHistoryActions.js

import { ADD_TO_SEARCH_HISTORY } from "./actionTypes";


export const addToSearchHistory = (place) => ({
  type: ADD_TO_SEARCH_HISTORY,
  payload: place,
});
