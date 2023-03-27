import * as actionType from "./actionType";
const intiState = {
  placelist: [],
  isAuth: false
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
      case actionType.SET_PLACES:
        return {
          ...state,
          placelist: action.payload
        }
        case actionType.AUTHENTICATE_USER:
          return{
            ...state,
            isAuth: true
          }
    default:
      return state;
  }
};
