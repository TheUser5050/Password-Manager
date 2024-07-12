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
      console.log(name);
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
  },
});

// Action creators are generated for each case reducer function
export const { addToArray, changeUsername, changePassword, changeIsUpdated } =
  listSlice.actions;

export default listSlice.reducer;
