// autocompleteActions.js

import { mockData } from '../../mock/data';
import { ADD_TO_SEARCH_HISTORY, FETCH_AUTOCOMPLETE_SUCCESS } from './actionTypes';

// Action Creators
export const fetchAutocompleteSuccess = (results) => ({
  type: FETCH_AUTOCOMPLETE_SUCCESS,
  payload: results,
});

export const addToSearchHistory = (place) => ({
  type: ADD_TO_SEARCH_HISTORY,
  payload: place,
});


export const fetchAutocompleteResults = (inputValue) => (dispatch) => {
  // Simulate filtering mock data based on inputValue
  const filteredResults = mockData.filter((place) =>
    place.description.toLowerCase().includes(inputValue.toLowerCase())
  );

  // Dispatch the filtered results as a success action
  dispatch({ type: FETCH_AUTOCOMPLETE_SUCCESS, payload: filteredResults });
};
