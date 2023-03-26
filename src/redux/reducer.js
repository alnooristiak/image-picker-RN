import * as actionType from "./actionType";
const intiState = {
  placelist: [],
};

export const rootReducer = (state = intiState, action) => {
  switch (action.type) {
    case actionType.ADD_PLACE:
      return {
        ...state,
        placelist: state.placelist.concat(action.payload),
      };
    case actionType.DELETE_PLACE:
      return {
        ...state,
        placelist: state.placelist.filter(place => place.key !== action.payload),
      };
    default:
      return state;
  }
};
