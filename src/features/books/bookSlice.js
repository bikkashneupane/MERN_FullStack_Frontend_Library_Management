import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [],
  selectedBook: {},
};
const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    setBook: (state, action) => {
      state.books = action.payload || [];
    },
    setSelectedBook: (state, action) => {
      state.selectedBook = action.payload;
    },
  },
});

const { reducer, actions } = bookSlice;

export const { setBook, setSelectedBook } = actions;

export default reducer;
