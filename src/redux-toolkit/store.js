//redux toolkit
import { configureStore } from "@reduxjs/toolkit";
// import todoReducer from "./todoReducer";
import { todoSlice } from "./TodoSlice";
const store = configureStore({
  reducer: {
    todo: todoSlice.reducer,
  },
});
export default store;
