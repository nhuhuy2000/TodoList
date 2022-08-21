import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoReducer";

// import { composeWithDevtools } from "redux-devtools-extension";
const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});

export default store;
