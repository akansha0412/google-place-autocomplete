// searchHistoryActions.js

export const ADD_TO_SEARCH_HISTORY = 'ADD_TO_SEARCH_HISTORY';

export const addToSearchHistory = (place) => ({
  type: ADD_TO_SEARCH_HISTORY,
  payload: place,
});
