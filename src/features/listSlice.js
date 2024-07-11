import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  myArray: [],
};

export const listSlice = createSlice({
  name: "array",
  initialState,
  reducers: {
    addToArray: (state, action) => {
      // state.myArray = [...state.myArray, action.payload];
      state.myArray.push(action.payload);
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
      const { newid, pass } = action.payload;
      // console.log(pass);
      state.myArray.map((item) => {
        if (item.id === newid) {
          item.password = pass;
        }
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToArray, changeUsername, changePassword } = listSlice.actions;

export default listSlice.reducer;
