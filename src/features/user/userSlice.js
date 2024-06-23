import { createSlice } from "@reduxjs/toolkit";

//initial state
const initialState = {
  user: {},
  allUsers: [],
};

//create slice
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setAllUsers: (state, action) => {
      state.allUsers = action.payload;
    },
  },
});

//export reducer and actions
const { reducer, actions } = userSlice;

export const { setUser, setAllUsers } = actions;

export default reducer;
