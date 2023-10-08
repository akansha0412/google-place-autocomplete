// autocompleteActions.js

import { mockData } from '../../components/mock/data';

// Action Types
export const FETCH_AUTOCOMPLETE_SUCCESS = 'FETCH_AUTOCOMPLETE_SUCCESS';

// Action Creators
export const fetchAutocompleteSuccess = (results) => ({
  type: FETCH_AUTOCOMPLETE_SUCCESS,
  payload: results,
});


export const fetchAutocompleteResults = (inputValue) => (dispatch) => {
  // Simulate filtering mock data based on inputValue
  const filteredResults = mockData.filter((place) =>
    place.description.toLowerCase().includes(inputValue.toLowerCase())
  );

  // Dispatch the filtered results as a success action
  dispatch({ type: FETCH_AUTOCOMPLETE_SUCCESS, payload: filteredResults });
};
