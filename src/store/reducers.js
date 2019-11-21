import { combineReducers } from 'redux';

const places = (state=[], { type, place }) => {
  switch (type) {
    case "ADD_PLACE":
      return [...state, place];
    case "REMOVE_PLACE":
      return state.filter(savedPlace => {
        return savedPlace.name !== place.name;
      });
    default:
      return state;
  }
};

const reducer = combineReducers({
  places
});

export const getSavedPlaces = (state) => state.places;

export default reducer;

