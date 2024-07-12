import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  myIsInCard: {},
};

export const isInCardSlice = createSlice({
  name: "isInCard",
  initialState,
  reducers: {
    addToIsInCard: (state, action) => {
      state.myIsInCard = action.payload;
    },
    changeIsInList: (state, action) => {
      state.myIsInCard.isInList = action.payload;
      console.log(state.myIsInCard);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToIsInCard, changeIsInList } = isInCardSlice.actions;

export default isInCardSlice.reducer;
