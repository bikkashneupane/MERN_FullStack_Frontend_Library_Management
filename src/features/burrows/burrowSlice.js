import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  burrows: [],
  selectedBurrow: {},
};

const burrowSlice = createSlice({
  name: "burrows",
  initialState,
  reducers: {
    setBurrows: (state, action) => {
      state.burrows = action.payload || [];
    },
    setSelectedburrow: (state, action) => {
      state.selectedBurrow = action.payload;
    },
  },
});

const { reducer, actions } = burrowSlice;

export const { setBurrows, setSelectedburrow } = actions;

export default reducer;
