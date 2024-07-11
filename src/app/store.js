import { configureStore } from "@reduxjs/toolkit";
import listReducer from "../features/listSlice";
import idReducer from "../features/idSlice";

export const store = configureStore({
  reducer: {
    list: listReducer,
    id: idReducer,
  },
});
