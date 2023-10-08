
export const ADD_TO_SELECTED_PLACE = 'ADD_TO_SELECTED_PLACE';

export const addToSelectedPlace = (place) => ({
  type: ADD_TO_SELECTED_PLACE,
  payload: place,
});
