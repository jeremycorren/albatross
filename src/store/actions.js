export const actions = {
  addPlace: place => ({
    type: "ADD_PLACE",
    place
  }),
  removePlace: place => ({
    type: "REMOVE_PLACE",
    place
  })
};