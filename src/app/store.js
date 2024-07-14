import { configureStore } from "@reduxjs/toolkit";
import listReducer from "../features/listSlice";
import deleteReducer from "../features/deleteSlice";
import isInCardReducer from "../features/isInCard";

export const store = configureStore({
  reducer: {
    list: listReducer,
    incard: isInCardReducer,
    isdelete: deleteReducer,
  },
});
