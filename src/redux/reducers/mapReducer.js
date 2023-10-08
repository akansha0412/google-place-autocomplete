
import { ADD_TO_SELECTED_PLACE } from '../actions/actionTypes';

const initialState = {
selectedPlace: {},
};

const mapReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_SELECTED_PLACE:
      return {
        ...state,
        selectedPlace: action.payload,
      };
    default:
      return state;
  }
};

export default mapReducer;
