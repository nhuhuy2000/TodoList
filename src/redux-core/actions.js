import {
  ADD_TODO,
  REMOVE_TODO,
  EDIT_TODO,
  FETCH_DATA,
  SEARCH_TODO,
  FILTER_TODO,
} from "./types";

export const addTodo = (data) => {
  return {
    type: ADD_TODO,
    payload: data,
  };
};
export const removeTodo = (id) => {
  return {
    type: REMOVE_TODO,
    payload: id,
  };
};
export const editTodo = (data) => {
  return {
    type: EDIT_TODO,
    payload: data,
  };
};
export const fetchData = (data) => {
  return {
    type: FETCH_DATA,
    payload: data,
  };
};
export const searchTodo = (data) => {
  return {
    type: SEARCH_TODO,
    payload: data,
  };
};
export const filterTodo = (data) => {
  return {
    type: FILTER_TODO,
    payload: data,
  };
};
