import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Delete: {
    value: false,
    id: "",
  },
};

export const deleteSlice = createSlice({
  name: "delete",
  initialState,
  reducers: {
    updateDelete: (state, action) => {
      state.Delete.value = action.payload;
    },
    updateDeleteId: (state, action) => {
      state.Delete.id = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateDelete, updateDeleteId } = deleteSlice.actions;

export default deleteSlice.reducer;
