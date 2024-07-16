import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const initialState = {
  myArray: [],
};

export const listSlice = createSlice({
  name: "array",
  initialState,
  reducers: {
    addToArray: (state, action) => {
      // state.myArray = [...state.myArray, action.payload];
      state.myArray = [...state.myArray, action.payload];
    },
    changeUsername: (state, action) => {
      const { id, name } = action.payload;
      state.myArray.map((item) => {
        if (item.id === id) {
          item.username = name;
        }
      });
    },
    changePassword: (state, action) => {
      const { id, password } = action.payload;
      state.myArray.map((item) => {
        if (item.id === id) {
          item.password = password;
        }
      });
    },
    changeIsUpdated: (state, action) => {
      const { id, isupdated } = action.payload;
      state.myArray.map((item) => {
        if (item.id === id) {
          item.isUpdated = isupdated;
        }
      });
    },
    deleteList: (state, action) => {
      const id = action.payload;
      const index = state.myArray.findIndex((item) => item.id === id);
      if (index !== -1) {
        state.myArray.splice(index, 1);
      }
    },
    addObject: (state, action) => {
      action.payload.forEach((item) => {
        state.myArray = [...state.myArray, item];
        console.log(item);
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addToArray,
  changeUsername,
  changePassword,
  changeIsUpdated,
  deleteList,
  addObject,
} = listSlice.actions;

export default listSlice.reducer;
