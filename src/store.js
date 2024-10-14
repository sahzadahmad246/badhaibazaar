import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "././reducers/userReducer";
const initialState = {};

const store = configureStore({
  reducer: {
    user: userReducer,
  },
  preloadedState: initialState,
});

export default store;
