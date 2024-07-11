import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  myId: [],
};

export const idSlice = createSlice({
  name: "id",
  initialState,
  reducers: {
    addToId: (state, action) => {
      state.myId = [...state.myId, action.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToId } = idSlice.actions;

export default idSlice.reducer;
