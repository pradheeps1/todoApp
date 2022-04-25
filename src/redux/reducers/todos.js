/* eslint-disable import/no-anonymous-default-export */
import { ADD_TODO, TOGGLE_TODO, EDIT_TODO, SET_TODO } from "../actionTypes";

const initialState = {
  allIds: [],
  byIds: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_TODO: {
      const {todos} = action.payload;
      return {
        allIds: Object.keys(todos) || [],
        byIds: todos
      }
    }
    case ADD_TODO: {
      const { id, title, description} = action.payload;
      return {
        ...state,
        allIds: [...state.allIds, id],
        byIds: {
          ...state.byIds,
          [id]: {
            title,
            description,
            isComplete: false
          }
        }
      };
    }
    case TOGGLE_TODO: {
      const { id } = action.payload;
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            ...state.byIds[id],
            isComplete: !state.byIds[id].isComplete
          }
        }
      };
    }
    case EDIT_TODO: {
      const { id, title, description, isComplete } = action.payload;
      return {
        ...state,
        allIds: [...state.allIds, id],
        byIds: {
          ...state.byIds,
          [id]: {
            title,
            description,
            isComplete
          }
        }
      }
    }
    default:
      return state;
  }
}
