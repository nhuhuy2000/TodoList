import {
  ADD_TODO,
  REMOVE_TODO,
  EDIT_TODO,
  FETCH_DATA,
  SEARCH_TODO,
  FILTER_TODO,
} from "./types";
const INITIAL_STATE = {
  filters: {
    search: "",
    filter: "all",
  },
  todoList: [],
};
const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };
    case REMOVE_TODO:
      return {
        ...state,
        todoList: [
          ...state.todoList.filter((item) => {
            return item.id !== action.payload;
          }),
        ],
      };
    case EDIT_TODO:
      return {
        ...state,
        todoList: [
          ...state.todoList.filter((item) => {
            return item.id !== action.payload.id;
          }),
          action.payload,
        ],
      };
    case FETCH_DATA:
      return {
        ...state,
        todoList: action.payload,
      };
    case SEARCH_TODO:
      return {
        ...state,
        filters: {
          ...state.filters,
          search: action.payload,
        },
      };
    case FILTER_TODO:
      return {
        ...state,
        filters: {
          ...state.filters,
          filter: action.payload,
        },
      };
    default:
      return state;
  }
};

export default reducer;

////////////////////////////////
//Redux toolkit
