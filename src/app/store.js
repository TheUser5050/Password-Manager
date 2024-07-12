import { configureStore } from "@reduxjs/toolkit";
import listReducer from "../features/listSlice";
import idReducer from "../features/idSlice";
import isInCardReducer from "../features/isInCard";

export const store = configureStore({
  reducer: {
    list: listReducer,
    id: idReducer,
    incard: isInCardReducer,
  },
});
