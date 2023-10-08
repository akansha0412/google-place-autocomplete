import { ADD_TO_SELECTED_PLACE } from "./actionTypes";

export const addToSelectedPlace = (place) => ({
  type: ADD_TO_SELECTED_PLACE,
  payload: place,
});
