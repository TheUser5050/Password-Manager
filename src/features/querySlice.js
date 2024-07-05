import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  myObject: {
    username: "",
    password: "",
    app: "",
  },
};

export const counterSlice = createSlice({
  name: "save",
  initialState,
  reducers: {
    setUsername: (state, action) => {
      state.myObject.username = action.payload;
    },
    setPassword: (state, action) => {
      state.myObject.password = action.payload;
    },
    setApp: (state, action) => {
      state.myObject.app = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUsername, setPassword, setApp } = counterSlice.actions;

export default counterSlice.reducer;
