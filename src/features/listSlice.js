import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  myArray: [],
};

export const listSlice = createSlice({
  name: "array",
  initialState,
  reducers: {
    addToArray: (state, action) => {
      state.myArray = [...state.myArray, action.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToArray } = listSlice.actions;

export default listSlice.reducer;
