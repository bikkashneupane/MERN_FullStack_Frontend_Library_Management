import { createSlice } from "@reduxjs/toolkit";

//initial state
const initialState = {
  user: {},
};

//create slice
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

//export reducer and actions
const { reducer, actions } = userSlice;

export const { setUser } = actions;

export default reducer;
