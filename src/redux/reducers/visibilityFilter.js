import { SET_FILTER } from "../actionTypes";
import { VISIBILITY_FILTERS } from "../../constants";

const initialState = VISIBILITY_FILTERS.ALL;

const visibilityFilter = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER: {
      console.log(action)
      return action.payload.filter;
    }
    default: {
      return state;
    }
  }
};

export default visibilityFilter;  
